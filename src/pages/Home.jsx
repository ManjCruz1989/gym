import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Front from '../components/Front';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';
import Socials from '../components/Socials';

const Container = styled.div`

`;


const Home = () => {
  return (
    <Container>
    <Navbar/>
    <Slides/>
    <Front/>
    <Socials/>
    <Footer/>
    </Container>
  )
}

export default Home