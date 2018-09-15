import styled from 'styled-components';
import Register from '../elements/Form';


const DocLabel = styled(Register.Label)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  &.radio {
    width: 50px;
  }
  .form_item_input {
    width: 200px;
  }
  
  @media (max-width: 769px) {
    flex-direction: column;
    width: 100%;
  }
`;


export default DocLabel;
