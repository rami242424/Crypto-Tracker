import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color:${(props)=> props.theme.accentColor};
    font-size: 48px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li<React.HTMLAttributes<HTMLLIElement>>`
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        padding: 20px;
        transition: color .2s ease-in;
        display: flex;
        align-items: center;
    
    }
    &:hover {
        a {
            color: ${(props)=> props.theme.accentColor};
        }
    }
`;

interface ICoins {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

interface ICoinListProps {
    toggleDark : () => void;
}

function CoinList({toggleDark} :ICoinListProps)  {
    const { isLoading, data} = useQuery<ICoins[]>("allCoinsData", fetchCoins );
    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDark}>toggle dark mode</button>
            </Header>
            {isLoading ? <Loader>Loading...</Loader> : <CoinsList>
                {data?.slice(0, 20).map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={{
                            pathname: `/${coin.id}`,
                            state: { name : coin.name }
                        }}>
                            <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}/>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinsList>}
        </Container>
    );
}

export default CoinList;