import styled from "styled-components";

const Flex = () => {
  return (
    <>
      <Container>
        <Box width="250" heigth="100" />
        <Box />
        <Box width="100" heigth="100" />
        <Box width="100" heigth="250" />
      </Container>
      <Grid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`;
const Item = styled.div`
  height: 100px;
  background: blue;
`;

const Container = styled.div`
  display: flex;
  background: white;
  justify-content: flex-start;
  align-items: center;
`;
const Box = styled.div`
  width: ${(props) => props.width || 200}px;
  height: ${(props) => props.heigth || 200}px;
  background: black;
  margin: 10px;
`;

export default Flex;
