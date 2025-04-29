import React, { useState } from "react";

function App(){
  // value: 현재 저장된 값
  const [value, setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    // 여기서 value는 input에 방금 입력된 값!
    const {currentTarget : {value}} = event;
    // input에 입력한 값을 상태로 저장
    setValue(value); // === setValue(event.currentTarget.value)
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value); // === 최신 상태값(useState의 value)
    setValue("");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="username"
          onChange={onChange}
          value={value}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;