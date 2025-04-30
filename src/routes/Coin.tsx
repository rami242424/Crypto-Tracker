import { useState } from "react";
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
function Coin()  {
    // const params = useParams();
    // console.log(params);
    // const { coinId } = useParams<{coinId:string}>();
    const { coinId } = useParams<IParams>();
    const [loading, setLoading] = useState(true);
    // const location = useLocation();
    // console.log(location, "location");
    const {state} = useLocation<RouteState>();
    return (
        <Container>
            <Header>
                {/* coin id를 직접 타이핑하여 들어갈때 */}
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null }
        </Container>
        );
}

export default Coin;