import { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = ({ onClose, onChange, name }) => {
  const [text, setText] = useState(name);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSave = () => {
    onChange(text);
    onClose();
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>Modal heading</Header>
        <Body>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </Body>
        <Footer>
          <BtnClose onClick={onClose}>Close</BtnClose>
          <BtnSave onClick={handleSave}>Save Changes</BtnSave>
        </Footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  min-width: 300px;
  border-radius: 4px;
`;
const Header = styled.div`
  font-size: 24px;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;
const Body = styled.div`
  padding: 15px;
`;
const Footer = styled.div`
  padding: 5px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin: 5px;
  font-size: 16px;
`;
const BtnClose = styled(Btn)`
  background: gray;
`;
const BtnSave = styled(Btn)`
  background: blue;
`;

export default Modal;
