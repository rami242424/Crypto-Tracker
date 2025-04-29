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
  animation: ${rotateAnimation} 1s linear infinite;
`;


function App(){
  return (
    <Wrapper>
      <Box/>
    </Wrapper>
  );
}

export default App;