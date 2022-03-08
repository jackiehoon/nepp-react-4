import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [showList, setShowList] = useState(false);
  const btnEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (btnEl.current !== e.target) setShowList(false);
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper>
      <Button ref={btnEl} onClick={() => setShowList(!showList)}>
        Dropdown
      </Button>
      {showList && (
        <List>
          <Item>Item #1</Item>
          <Item>Item #2</Item>
          <Item>Item #3</Item>
          <Item>Item #4</Item>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Button = styled.button``;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 200px;
  position: absolute;
`;
const Item = styled.li`
  padding: 5px 15px;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background: #efefef;
  }
`;

export default Dropdown;
