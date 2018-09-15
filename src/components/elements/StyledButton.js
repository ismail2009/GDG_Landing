import styled from 'styled-components';
import StyledLink from './Link';

const StyledButton = styled(StyledLink)`
  &:hover {
    color: #fff;
  }
  width: 200px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 22px;
  background: -webkit-linear-gradient(45deg, #03a9f4 4%,#7ae7f8 100%);

`;

export default StyledButton;
