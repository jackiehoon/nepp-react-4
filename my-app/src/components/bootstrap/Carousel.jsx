import { useEffect, useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [goodToGo, setGoodToGo] = useState(true);

  useEffect(() => {
    setGoodToGo(false);

    setTimeout(() => {
      setGoodToGo(true);
    }, 1000);
  }, [activeIndex]);

  const handleChange = (i) => {
    if (!goodToGo) return;
    if (i === -1 && activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else if (i === 1 && activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + i);
    }
  };

  return (
    <Wrapper>
      <List activeIndex={activeIndex}>
        {data.map((image, index) => (
          <Item key={index} src={image} active={activeIndex === index} />
        ))}
      </List>
      <BtnPrev onClick={() => handleChange(-1)}>이전</BtnPrev>
      <BtnNext onClick={() => handleChange(1)}>다음</BtnNext>

      <ButtonList>
        {data.map((image, index) => (
          <BtnIndex
            onClick={() => setActiveIndex(index)}
            active={activeIndex === index}
          >
            {index + 1}
          </BtnIndex>
        ))}
      </ButtonList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  overflow: hidden;
`;
const List = styled.div`
  display: flex;
  transform: ${({ activeIndex }) => `translateX(${-800 * activeIndex}px)`};
  transition: transform 1s;
`;
const Item = styled.img`
  /* position: absolute;
  top: 0;
  left: 0; 
  opacity: ${({ active }) => !active && "0"};
  transition: opacity 1s; */
  width: 800px;
  height: 600px;
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const BtnPrev = styled(Btn)`
  left: 50px;
`;
const BtnNext = styled(Btn)`
  right: 50px;
`;

const ButtonList = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnIndex = styled.button`
  background: ${({ active }) => active && "red"};
`;

export default Carousel;
