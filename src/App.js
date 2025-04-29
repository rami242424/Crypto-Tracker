import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
  25%{
    transform:rotate(180deg);
    border-radius: 50px;
  }
  50%{
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;

  span{
    font-size: 50px;
    &:hover {
      font-size: 10px
    }
    &:active {
    opacity: 0;
  }
`;


function App(){
  return (
    <Wrapper>
      <Box>
        <span>😘</span>
      </Box>
    </Wrapper>
  );
}

export default App;