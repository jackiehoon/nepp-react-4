import styled from "styled-components";
import { MainRight, MainPostList, MainShortsList } from "../organisms";
import { postList } from "../../datas/posts";
import { shortsList } from "../../datas/shorts";

const Main = () => {
  return (
    <Container>
      <Left>
        <MainShortsList data={shortsList} />
        <MainPostList data={postList} />
      </Left>
      <MainRight />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  margin-right: 28px;
`;
export default Main;
