import styled from 'styled-components';
import Wrapper from '../../elements/Wrapper';

const HeaderWrapper = styled(Wrapper)`
.header_wrapper_cover {
    padding: 4rem 0 4.5rem 0;
    background-color: rgba(66, 161, 193, 0.7);
    width: 100%;
    display: flex;
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    font-family: 'Markazi Text', serif;
    font-weight: 700;
    .row {
      display:flex;
      justify-content: space-between;
      @media (max-width: 769px) {
        flex-direction: column;
        align-items: center;
      }
      .col {
        &:first-child {
          @media (max-width: 769px) {
            margin-top: 40px;
          }
        }
        &:last-child {
          @media (max-width: 769px) {
            width: 100%;
            }
          }
        }
      }
    }
    h2 {
      display: flex;
      font-weight: 400;
      justify-content: flex-start;
      font-size: 53px;
      @media (max-width: 992px) and (min-width: 768px) {
        font-size: 42px;
      }
    }
    .feature {
      display: flex;
      align-items: center;
      margin: 34px 0 25px 0;
      &:last-child {
        background-color: #fede007a;
        border-radius: 12px;
        display: flex;
        justify-content: center;
      }
      h2 {
        @media (max-width: 769px) {
          font-size: 25;
        }
      }
      .feature_arrow, .feature_sign {
        font-size: 44px;
      }
      .feature_sign {
        margin-left: 25px;
      }
      .feature_arrow {
        margin-right: 5px;
      }
      h4 {
        line-height: 2;
        align-items: center;
        font-size: 25px;
        display: flex;
        justify-content: center;
        @media (max-width: 769px) {
          font-size: 20;
        }
      }
}
    .header_button {
    display: flex;
    justify-content: space-around;
        @media (max-width: 465px) {
            flex-direction: column;
            align-items: center;
        }
      }
  }
`;
export default HeaderWrapper;
