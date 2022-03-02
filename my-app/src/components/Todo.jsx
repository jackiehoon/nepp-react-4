import styled from "styled-components";
import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList, text];
    setTodoList(newTodoList);
    setText("");
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
        {todoList.map((todo, i) => (
          <Item key={i}>
            <label>
              <Checkbox type="checkbox" />
              <Content>{todo}</Content>
            </label>
            <BtnDelete>-</BtnDelete>
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
const Item = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Checkbox = styled.input`
  margin: 20px;
`;
const Content = styled.span``;
const BtnDelete = styled.button`
  border-radius: 50%;
  border: 2px solid red;
  background: #fff;
  color: red;
  cursor: pointer;
  margin-right: 20px;
`;

export default Todo;
