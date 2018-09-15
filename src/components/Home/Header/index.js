import React from 'react';
import {
  IoLogoUsd, IoMdCalendar, IoIosStar, IoIosArrowBack,
} from 'react-icons/io';
import HeaderWrapper from './Wrapper';
import Container from '../../elements/Container';
import RegistrationForm from '../ClientRegister';

const Header = () => (
  <HeaderWrapper marginBottom="25px">
    <div className="header_wrapper_cover">
      <Container>
        <div className="row">
          <div className="col">
            <h2>هلأ بامكانك تعرف </h2>
            <div className="feature">
              <IoLogoUsd className="feature_sign" />
              <h4>أسعار الخدمات الّي بيقدمها طبيب الأسنان</h4>
            </div>
            <div className="feature">
              <IoIosStar className="feature_sign" />
              <h4>تقييم الطبيب من قبل مرضاه السابقين</h4>
            </div>
            <div className="feature">
              <IoMdCalendar className="feature_sign" />
              <h4>مواعيد طبيب الأسنان و تحجز معه موعد بضغطة وحدة  </h4>
            </div>
            <div className="feature">
              <h4>كل الي عليك انو تعبي بياناتك وتحجز موعد </h4>
              <div className="round">
                <div id="cta">
                  <IoIosArrowBack className="feature_arrow" />
                  <IoIosArrowBack className="feature_arrow" />
                </div>
              </div>
            </div>

          </div>

          <div className="col">
            <RegistrationForm />
          </div>
        </div>
      </Container>
    </div>
  </HeaderWrapper>
);


export default Header;
