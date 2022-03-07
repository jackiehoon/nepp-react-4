import styled from "styled-components";

const Accordion = ({ data }) => {
  return (
    <List>
      {data.map(({ title, content }) => (
        <Item active>
          <Header>
            {title} <BtnArrow />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  background: #fff;
  padding: 0;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Body = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  display: none;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }

  ${Body} {
    display: ${({ active }) => active && "block"};
  }
`;
const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const BtnArrow = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;

export default Accordion;
