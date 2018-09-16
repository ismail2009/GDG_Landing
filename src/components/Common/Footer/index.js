import React from 'react';
import ReactGA from 'react-ga';
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';

import FooterWrapper from './FooterWrapper';
ReactGA.initialize('UA-125030175-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Footer = () => (
  <FooterWrapper>
    <FooterWrapper.FooterContainer id="footer">
      <div className="footer_socail">
        <p>تابعونا صفحتنا على:</p>
        <div className="footer_socail_links">
          <FooterWrapper.SocialLink href="https://business.facebook.com/GlobalDentalGateway" onClick={() => ReactGA.ga('send', 'event', 'Facebook Page')}><div><TiSocialFacebook /></div></FooterWrapper.SocialLink>
          <FooterWrapper.SocialLink href="https://www.instagram.com/globaldentalgateway/" onClick={() => ReactGA.ga('send', 'event', 'Instagram Page')}><div><TiSocialInstagram /></div></FooterWrapper.SocialLink>
        </div>
      </div>
    </FooterWrapper.FooterContainer>
  </FooterWrapper>
);

export default Footer;
