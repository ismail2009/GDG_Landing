import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding${props => props.theme.padding};
  background-color: ${props => props.theme.main};
`;
Wrapper.defaultProps = {
  theme: {
  },
};
export default Wrapper;
