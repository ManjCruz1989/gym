import React from 'react';
import styled from 'styled-components';
import {Instagram, Facebook, Twitter, Pinterest} from '@mui/icons-material';

const Container = styled.div`
width: 100vw;
height: 10vh;
display: flex;
`;

const Left = styled.div`
flex: 1;
background-color: black;
position: relative;
`;

const Logo = styled.h1`
color: white;
font-weight: bold;
font-size: 30px;
align-items: center;
position: absolute;
top: 30%;
left: 10%;
`;

const Right = styled.div`
flex: 1;
background-color: black;
position: relative;
`;

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Social = styled.div`
flex: 1;
display: flex;
align-items: center;
cursor: pointer;
margin-top: 30px;
object-fit: contain;
justify-content: space-between;
margin-right: 40px;

@media (max-width: 620px) {
  margin-right: 20px;
  margin-top: 10%;
 }
`;

const Cwu = styled.h4`
flex: 1;
color: white;
text-align: center;
margin-top: 32px;

@media (max-width: 620px) {
  margin-right: 5px;
  text-align: center;
  margin-top: 10%;
  }
`;

const Socials = () => {
  return (
    <Container>
      <Left>
        <Logo>GYM.</Logo>
      </Left>
      <Right>
      <Wrapper>
      <Cwu>Connect With Us</Cwu>
        <Social>
        <Instagram style={{color: "white",/* marginRight: "20%"*/}}/>
        <Facebook style={{color: "white", /* marginRight: "20%"*/}}/>
        <Twitter style={{color: "white", /* marginRight: "20%"*/}}/>
        <Pinterest style={{color: "white", /* marginRight: "20%"*/}}/>
        </Social>
        </Wrapper>
      </Right>
      
    </Container>
  )
}

export default Socials