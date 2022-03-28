import styled from "styled-components";
import { MainRight } from "../organisms";

const Main = () => {
  return (
    <Container>
      <Left></Left>
      <MainRight />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
export default Main;
