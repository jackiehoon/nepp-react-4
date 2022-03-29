import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MainPostImageList = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerEl = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const onResize = () => {
      const { width } = window.getComputedStyle(containerEl.current);
      setContainerWidth(width.slice(0, -2));
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Container ref={containerEl}>
      <ImageList containerWidth={containerWidth} activeIndex={activeIndex}>
        {data.map(({ id, image }) => (
          <ImageWrapper>
            <Image key={id} src={image} />
          </ImageWrapper>
        ))}
      </ImageList>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
`;
const ImageList = styled.div`
  display: flex;
  transform: ${({ containerWidth, activeIndex }) =>
    `translateX(${containerWidth * activeIndex * -1}px)`};
`;
const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
`;

export default MainPostImageList;
