import React from 'react';
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import FooterWrapper from './FooterWrapper';

const Footer = () => (
  <FooterWrapper>
    <FooterWrapper.FooterContainer id="footer">
      <div className="footer_socail">
        <p>تابعونا صفحتنا على:</p>
        <div className="footer_socail_links">
          <FooterWrapper.SocialLink to="#"><div><TiSocialFacebook /></div></FooterWrapper.SocialLink>
          <FooterWrapper.SocialLink to="#"><div><TiSocialInstagram /></div></FooterWrapper.SocialLink>
        </div>
      </div>
    </FooterWrapper.FooterContainer>
  </FooterWrapper>
);

export default Footer;
