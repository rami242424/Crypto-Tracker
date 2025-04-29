import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled(BoxOne)`
  background-color: yellow;
`;


const Text = styled.span`
  color: white;
`;

function App(){
  return (
    <Father>
      <BoxOne>
        <Text>hi!!</Text>
      </BoxOne>

      <BoxTwo/>
    </Father>
  );
}

export default App;