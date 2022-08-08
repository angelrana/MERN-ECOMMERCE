import styled from "styled-components";
import { SliderImages } from "../data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: black;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-color: #${(props) => props.color};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 90%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  padding: 15px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
  margin-top: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 10px;
  margin-left: 20px;
  margin-top: 15px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderImages.map((item) => {
          return (
            <Slide color={item.bg} key={item.key}>
              <ImageContainer>
                <Image src={item.img}></Image>
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={`/products/${item.cat}`} key={item.key}>
                  <Button>SHOP NOW</Button>
                </Link>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
