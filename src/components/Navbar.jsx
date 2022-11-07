import React, { useEffect, useState } from 'react';
import { Search, Menu } from '@mui/icons-material';
import styled from 'styled-components';


const Container = styled.div`
width: 100vw;
display: flex;
height: 15vh;
@media (max-width: 970px) {
width: 100vw;
margin: 0px;
flex-wrap: wrap-reverse;
  }
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 500px) {
  flex: 0 0 100%;
  }
`;

const Center = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
@media (max-width: 500px) {
  flex: 1 0 33%;
  }
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
@media (max-width: 500px) {
  flex: 1 0 33%;
  }
`;

const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex;
 align-items: center;
`;

const Input = styled.input`
border: none;
@media (max-width: 500px) {
  font-size: 20px;
  }
`;

const Logo = styled.h1`
text-align: center;
flex: 1;
font-weight: bold;

@media (max-width: 500px) {
  text-align: left;
  margin-left: 25px;
  }
`;
const MenuItem = styled.div`
flex: 1;
font-size: 14px;
cursor: pointer;
text-align: center;
/*margin-left: 25px;*/

@media (max-width: 970px) {
  font-size: 20px;
cursor: pointer;
margin-left: 30px;
  }
`;

const Navbar = () => {

  const useWindowSize = ()=>{
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(()=>{
    const handleResize = ()=>{
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  },[]);
  return size
};

const [width] = useWindowSize();

  return (
    <Container>
  
      <Left>
      <SearchContainer> 
      <Input placeholder="Search Equipment"/>
      <Search style={{color: "gray", fontSize: 20}}/>
      </SearchContainer>
      </Left>
      <Center>

      <Logo>GYM.</Logo>
      </Center>

      <Right>
      {width < 970 ? null : <MenuItem style={{paddingLeft: "20px", textAlign: "right"}}> WEIGHTS </MenuItem>}
      {width < 970 ? <Menu style={{marginRight: "30%"}}/> : <MenuItem> CARDIO </MenuItem>}
      </Right>

 
    
    </Container>
  )
}

export default Navbar