import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 1em;
  font-weight: 300;
  text-decoration: none !important;
  cursor: pointer !important;
  color: #FFFFFF;
  &:hover {
    text-decoration: none;
    color: #00C9FD;
  }
`;

export default StyledLink;
