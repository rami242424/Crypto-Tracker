// src/routes/Price.tsx
import React from "react";
import { useQuery } from "react-query";
import { fetchCoinTickers } from "./api";
import { IPriceData } from "./Coin";
import styled from "styled-components";

const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 16px;
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 16px;
  border-radius: 10px;
  margin-top: 20px;
`;

interface StatItemProps {
  negative?: boolean;
  children?: React.ReactNode;
}

const StatItem = styled.div<StatItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    font-size: 12px;
    color: ${(props) => props.theme.textColor};
    opacity: 0.6;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .value {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) =>
      props.negative ? "#ef5350" : "#2ecc71"};
  }
`;

interface PriceProps {
  coinId: string;
}

export default function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceData>(
    ["priceData", coinId],
    () => fetchCoinTickers(coinId)
  );

  if (isLoading || !data) {
    return <div>Loading price...</div>;
  }

  const USD = data.quotes.USD;

  // 1) 가격은 통화 스타일로, 소수점 둘째 자리까지
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(USD.price);

  // 2) 변동률은 부호와 함께 소수점 둘째 자리까지
  const change24h = USD.percent_change_24h;
  const isNegative = change24h < 0;
  const formattedChange = `${isNegative ? "" : "+"}${change24h.toFixed(2)}%`;

  // 3) 볼륨·시가총액은 compact notation (예: "29B")
  const compactFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  });
  const formattedVolume = `$${compactFormatter.format(USD.volume_24h)}`;
  const formattedMarketCap = `$${compactFormatter.format(USD.market_cap)}`;

  return (
    <PriceContainer>
      <StatItem>
        <span className="label">Price</span>
        <span className="value">{formattedPrice}</span>
      </StatItem>

      <StatItem negative={isNegative}>
        <span className="label">24h Change</span>
        <span className="value">
          {isNegative ? "▼ " : "▲ "}
          {formattedChange}
        </span>
      </StatItem>

      <StatItem>
        <span className="label">24h Volume</span>
        <span className="value">{formattedVolume}</span>
      </StatItem>

      <StatItem>
        <span className="label">Market Cap</span>
        <span className="value">{formattedMarketCap}</span>
      </StatItem>
    </PriceContainer>
  );
}
