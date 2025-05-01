import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;  // 초 단위 UNIX timestamp
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
  isDark: boolean;
}

function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );

  if (isLoading || !data) {
    return <div>Loading chart...</div>;
  }

  return (
    <ApexChart
      type="candlestick"
      series={[
        {
          data: data.map((price) => ({
            x: new Date(parseInt(price.time_close, 10) * 1000),  
            y: [price.open, price.high, price.low, price.close],
          })),
        },
      ]}
      options={{
        chart: {
          type: "candlestick",
          background: "transparent",
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        theme: { mode: isDark ? "dark" : "light"},
        xaxis: {
          type: "datetime",
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: { datetimeUTC: false },
        },
        yaxis: { tooltip: { enabled: true } },
        plotOptions: {
          candlestick: {
            colors: { upward: "#26a69a", downward: "#ef5350" },
            wick: { useFillColor: true },
          },
        },
        tooltip: { x: { format: "yyyy-MM-dd HH:mm" } },
        grid: { show: false },
      }}
      width="100%"
      height={350}
    />
  );
}

export default Chart;
