import { useState } from "react";

const IterationSample = () => {
  const [nextId, setNextId] = useState(5);
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (!text) return;

    const newNames = [...names, { id: nextId, text: text }];
    setNames(newNames);
    setText("");
    setNextId((prev) => prev + 1);
  };
  const handleDelete = (id) => {
    // id로 뺄 element를 찾아서 걔가 빠진 새로운 배열을 만든다.
    const newNames = names.filter((e) => e.id !== id);
    setNames(newNames);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map(({ id, text }, i) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {i + 1}) {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
