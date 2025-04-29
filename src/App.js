import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items : center;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`;


function App(){
  return (
    <Wrapper>
      <Box>
        <Title>안녕</Title>
      </Box>
    </Wrapper>
  );
}

export default App;