import { useState } from "react";

const Counter = () => {
  //   const array = [1, 2];
  //   //   const one = array[0];
  //   //   const two = array[1];
  //   const [one, two] = array;

  //   let nubmer = 0
  const [number, setNumber] = useState(0);
  let number2 = 0;

  const handleClick = () => {
    // number += 1;
    // number = number + 1;
    setNumber(number + 1);
    number2 += 1;
    console.log("number2 : " + number2);
  };

  return (
    <>
      <h2>number2 : {number2}</h2>
      <h2>number: {number}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
