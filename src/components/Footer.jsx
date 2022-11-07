import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
width: 100vw;
display: flex;
height: 40vh;
@media (max-width: 970px) {
flex-direction: column;
  }

`;

const Box1 = styled.div`
flex: 1;
min-width: 33.333%;

`;

const News = styled.h1`
font-family: 'Russo One', sans-serif;
margin-top: 20%;
font-size: 1.5rem;
padding-left: 10px;
padding-right: 10px;

@media (max-width: 970px) {
text-align: center;
margin-top: 10%;
  }
`;

const Box2 = styled.div`
flex: 1;
min-width: 33.333%;
`;

const Center = styled.div`
display: flex;
margin-top: 20%;
padding-left: 20px;
padding-right: 20px;

@media (max-width: 970px) {
text-align: left;
flex: 2;
margin-top: 10%;
  }
`;

const Centertxtbox = styled.div`
flex: 1;
margin-left: 40px;

@media (max-width: 970px) {
text-align: left;
flex: 2;
  }
`;

const Centertxtbox2 = styled.div`
flex: 1;

@media (max-width: 970px) {
text-align: left;
  }
`;

const Centertxt = styled.p`
color: gray;
margin-bottom: 10px;
`;

const Box3 = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
object-fit: contain;
min-width: 33.333%;
margin-top: 0%;

@media (max-width: 970px) {
margin-top: 5%;
  }
`;

const Location = styled.img`
margin: auto;
border-radius: 20%;
object-fit: contain;
`;

const Footer = () => {
  return (
    <Container>
        <Box1>
        <News>GET THE LATEST NEWS SENT RIGHT TO YOUR INBOX!</News>
        </Box1>
        <Box2>
        <Center>
        <Centertxtbox>
        <Centertxt style={{fontWeight: 600, color: "black", marginBottom: "15px"}}>Need Help</Centertxt>
        <Centertxt>Help Center</Centertxt>
        <Centertxt>Live Chat</Centertxt>
        <Centertxt>Send us Feedback</Centertxt>
        </Centertxtbox>
        <Centertxtbox2>
        <Centertxt style={{fontWeight: 600, color: "black", marginBottom: "15px"}}>Orders & Shipping</Centertxt>
        <Centertxt>Order Status</Centertxt>
        <Centertxt>Returns/Exchanges</Centertxt>
        <Centertxt>Shipping Support</Centertxt>
        </Centertxtbox2>
        </Center>
        </Box2>
        <Box3>
        <Location src="images/googlemaps.jpeg"/>   
        </Box3>
    </Container>
  )
}

export default Footer