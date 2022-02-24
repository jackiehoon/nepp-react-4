import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(7);
  const handleNumber = (n) => setNumber((prev) => prev + n);
  return (
    <>
      <h1>현재 카운터 값은 {number} 입니다.</h1>
      <button onClick={() => handleNumber(1)}>+1</button>
      <button onClick={() => handleNumber(-1)}>-1</button>
      <button onClick={() => handleNumber(3)}>+3</button>
      <button onClick={() => handleNumber(7)}>+7</button>
    </>
  );
};

export default Counter2;
