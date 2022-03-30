import styled from "styled-components";
import { Backdrop, ModalContainer } from "../../atoms/modal";

import { ReactComponent as IconMedia } from "../../../assets/images/media.svg";

const ModalAddPost = () => {
  return (
    <>
      <Backdrop />
      <Container>
        <Header>새 게시물 만들기</Header>
        <Body>
          <IconMedia />
          <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
          <Button>컴퓨터에서 선택</Button>
        </Body>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)`
  max-width: 664px;
  width: 70vw;
  height: 70vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  font-weight: bold;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
  text-align: center;
`;
const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Guide = styled.h3``;
const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border-radius: 4px;
  background-color: #0095f6;
  border: none;
  padding: 5px 9px;
`;
export default ModalAddPost;
