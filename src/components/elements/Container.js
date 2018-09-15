import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  @media (max-width: 768px) {
    width: 95%;
  }`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

Container.Row = Row;
export default Container;
