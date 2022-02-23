import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState(["눈사람", "얼음", "눈", "바람"]);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    if (!text) return;

    const newNames = [...names, text];
    setNames(newNames);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name, i) => (
          <li key={i}>이름: {name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
