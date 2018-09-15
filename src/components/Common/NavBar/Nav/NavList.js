import styled from 'styled-components';

const NavList = styled.ul`
  display:flex;
  li {
    font-size: 1em;
    color: #FFFFFF;
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    &:first-child {
      margin-left: 10px;
    }
    a {
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export default NavList;
