import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from '../Common/Footer';
import NavBar from '../Common/NavBar';
import Background from '../../assets/slide-1.jpg';

const Main = styled.div`
 background-image: url(${props => props.url});
 background-size: cover;
 background-position: center;`;
const Home = () => (
  <Main url={Background}>
    <NavBar />
    <Header />
    <Footer />
  </Main>
);
export default Home;
