import styled from 'styled-components';
import StyledButton from '../../elements/StyledButton';

const ColoredButton = styled(StyledButton)`
    border-radius: 5px;
    @media (max-width: 465px) {
        margin-bottom: 25px;
    }
`;

export default ColoredButton;
