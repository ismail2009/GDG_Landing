import React from 'react';
import styled from 'styled-components';

import Container from '../../elements/Container';
import StyledLink from '../../elements/Link';
import Nav from './Nav';
import Logo from '../../../assets/logo.svg';

const ColoredLink = styled(StyledLink)`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 70px;
  }
`;
const theme = {
  shadow: 'true',
  padding: ': 10px 0',
};

const NavBar = () => (
  <Nav.NavWrapper theme={theme}>
    <Container>
      <Nav>
        <ColoredLink to="#">
          <img src={Logo} alt="Logo" />
        </ColoredLink>
      </Nav>
    </Container>
  </Nav.NavWrapper>
);

export default NavBar;
