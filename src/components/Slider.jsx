import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import{sliderItems}from "../../src/data"
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
//   background-color: coral;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  background-color: #b6f0c6;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index:1;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX( ${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color:#${props => props.bg}; 
`;
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;

`;
const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
 flex: 1;
 padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight:500;
letter-spacing: 3px;

`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

function Slider() {
  const[slideIndex, setSlideIndex] = useState(0); 


    const clickHandler = (direction) => {
        if(direction === "left"){
          setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }else{
          setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    };

  return (
    <Container>
      <Arrow direction="left" onClick={() => clickHandler("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
     { sliderItems.map((data) => (
                 <Slide bg={data.bg}>
                 <ImageContainer>
                   <Image src={data.img} />
                 </ImageContainer>
                 <InfoContainer>
                       <Title>{data.title}</Title>
                       <Desc>{data.desc}</Desc>
                       <Link to="productpage"><Button>SHOW ME</Button></Link>
                 </InfoContainer>
               </Slide>
     ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => clickHandler("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
