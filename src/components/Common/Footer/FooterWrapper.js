import styled from 'styled-components';
import Container from '../../elements/Container';

const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #FFFFFF;

`;

const SocialLink = styled.a`
    margin-right: 12px;
    div {
        font-size: 24px;
        width: 28px;
        height: 28px;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1px;
    }
    &:hover {
        color:  #FFFFFF;
        div {
            background: rgba(0, 0, 0, 0.17);
        }
    }
`;

const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    .footer_socail {
      display: flex;
      padding: 12px;
        p {
            margin-right: 12px;
            color: #FFFFFF;
        }
        .footer_socail_links {
            display: flex;
        }
    }
    .footer_lists {
        display: flex;
        flex-direction: row;
        @media (max-width: 679px) {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
    }
`;


FooterWrapper.FooterContainer = FooterContainer;
FooterWrapper.SocialLink = SocialLink;

export default FooterWrapper;
