import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface IParams {
    coinId: string;
}

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

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface RouteState {
    name: string;
}

// https://api.coinpaprika.com/v1/coins/btc-bitcoin
// https://api.coinpaprika.com/v1/tickers/btc-bitcoin
function Coin()  {
    const { coinId } = useParams<IParams>();
    const [loading, setLoading] = useState(true);
    const {state} = useLocation<RouteState>();
    const [info, setInfo] = useState({});
    const [priceInfo, setPriceInfo] = useState({});
    useEffect(() => {
        (async() => {
            const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(infoData);
            setPriceInfo(priceData);
        })();
    }, []);
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null }
        </Container>
        );
}

export default Coin;