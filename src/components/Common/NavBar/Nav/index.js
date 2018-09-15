import styled from 'styled-components';
import NavList from './NavList';
import Wrapper from '../../../elements/Wrapper';

const NavWrapper = styled(Wrapper)`
  background-color: #FFFFFF;

  `;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  .nav_list_container {
    display: flex;
    align-items: center;
    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: center;
    ${NavList} {
      margin: 10px;
      &:last-child  {
      margin-bottom: 10px;
      }
    }
  }
`;
const VerticalLine = styled.div`
  width: 2px;
  height: 16px;
  background-color: #FFFFFF;
  margin: 0 10px;
`;
Nav.NavList = NavList;
Nav.VerticalLine = VerticalLine;
Nav.NavWrapper = NavWrapper;

export default Nav;
