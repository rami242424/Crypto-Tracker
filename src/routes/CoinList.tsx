import styled from "styled-components";


const Title = styled.h1`
    color:${(props)=> props.theme.accentColor};
`;


function CoinList()  {
    return (
        <>
            <Title>CoinList</Title>
        </>
        );
}

export default CoinList;