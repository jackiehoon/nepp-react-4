import { useState, useEffect } from "react";
import styled from "styled-components";

const ModalNickName = ({ onClose, onChange, nickName }) => {
  const [text, setText] = useState(nickName);

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
        <Body>
          <h2>닉네임 변경</h2>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </Body>
        <Footer>
          <BtnSave onClick={handleSave}>Save</BtnSave>
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
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Body = styled.div`
  padding: 10px;
`;
const Footer = styled.div`
  padding: 10px;
`;
const BtnSave = styled.button``;

export default ModalNickName;
