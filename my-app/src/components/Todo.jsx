import styled, { css } from "styled-components";
import { useRef, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [
      ...todoList,
      { id: nextId.current, text, isDone: false },
    ];
    setTodoList(newTodoList);
    setText("");
    nextId.current += 1;
  };

  const handleDelete = (id) => {
    // 기존 todoList에서 매개변수로 받아온 id와 같은 todo만 빼고
    // 나머지 todo로 새 todoList를 만들자
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleIsDone = (id, checked) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: checked } : todo
    );
    setTodoList(newTodoList);
  };

  return (
    <Container>
      <Title>일정 관리</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputText
            placeholder="할 일을 입력하세요"
            onChange={handleChange}
            value={text}
          />
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        {todoList.map(({ id, text, isDone }, i) => (
          <Item key={i} isDone={isDone}>
            <label>
              <Checkbox
                type="checkbox"
                onChange={(e) => handleIsDone(id, e.target.checked)}
              />
              <Content>{text}</Content>
            </label>
            <BtnDelete onClick={() => handleDelete(id)}>-</BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};
// 254페이지 처럼 스타일링
const Container = styled.div`
  width: 500px;
  margin: 60px auto;
  background: #fff;
  min-height: 500px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  padding: 20px;
  background: #22b8cf;
  color: #fff;
`;
const InputWrapper = styled.div`
  height: 40px;
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  background-color: #000;
  color: #fff;
`;
const BtnSubmit = styled.button`
  background: gray;
  border: none;
  color: #fff;
  height: 100%;
  width: 40px;
  font-size: 30px;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Content = styled.span``;
const Item = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #ddd;
  }
  background-color: ${({ isDone }) => isDone && "#efefef"};

  ${({ isDone }) =>
    isDone &&
    css`
      ${Content} {
        text-decoration: line-through;
        color: #ddd;
      }
    `}
`;
const Checkbox = styled.input`
  margin: 20px;
`;
const BtnDelete = styled.button`
  border-radius: 50%;
  border: 2px solid red;
  background: #fff;
  color: red;
  cursor: pointer;
  margin-right: 20px;
`;

export default Todo;
