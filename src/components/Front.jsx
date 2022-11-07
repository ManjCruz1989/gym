import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width: 100vw;
height: 50%;
overflow: hidden;
display: flex;

position: relative;

@media (max-width: 970px) {
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
}
`;


const Image = styled.img`
flex: 1;
min-height: 100%;
width: 100%;
`;

const ImageTextWrap = styled.div`
flex: 1;
min-height: 100%;
width: 100%;
margin: 5% 0% 5% 5%;
position: relative;
@media (max-width: 970px) {
  margin: 5% 10% 0% 10%; 
  width: 90%;
  }
`;

const Imagetext = styled.img`
position: absolute;
align-items: center;
justify-content: center;
left: 0;
right: 0;
padding-top: 20%;
margin: auto;
width: 40%;
transition: transform 400ms;
cursor: pointer;

&:hover{
    transform: scale(1.03);
}
@media (max-width: 970px) {
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  padding-top: 20%;
  margin: auto;
  width: 40%;
  }
`;

const Info = styled.div`
flex: 1;
width: 100%;
margin: 5% 5% 5% 0%;
background-color: #F2F2F2;
object-fit: contain;

@media (max-width: 970px) {
  margin: 0% 0% 5% 0%;
  width: 90%;
  }
`;

const Title = styled.h1`
font-family: 'Russo One', sans-serif;
margin: 10%;
`;
const Desc = styled.p`
margin: 10%;
letter-spacing: 2px;
font-size: 18px;
`;

const Front = () => {
  return (
    <Container>
    <ImageTextWrap>
      <Image src="images/arms.jpeg"/> 
      <Imagetext src="images/kisspng-sales-retail-shopping-bag-promotion-flexible-inter-sale-wordart-5a722bff9acdb6.2350313415174318076341.png"/>
      </ImageTextWrap>
     <Info>
       <Title>BodyFit: Start Your Transformation</Title>
       <Desc>Get everything you need to keep improving with the world's largest fitness community. Unlimited Access - £39.99/year (or £6.99/month)</Desc>
    </Info>
    </Container>
  )
}

export default Front