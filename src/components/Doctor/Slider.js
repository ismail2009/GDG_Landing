import React from 'react';
import SliderSlick from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Wrapper from '../elements/Wrapper';
import Container from '../elements/Container';
import Slide1 from '../../assets/doc-profile-1.png';
import Slide2 from '../../assets/GDG-calender-1.png';
import Slide3 from '../../assets/Android.png';

const SlideSection = styled.section`
  width: 100%;
  background-color: #FFFFFF;
  .slide_inner_container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4cceff21;
  }
  .slide_box {
    width: 90% !important;
    height: 501px!important;
    display: flex;
    align-items: center;
    .slick-list {
      width: 100% !important;
    }
    .slick-dots {
      bottom: 10px;
    }
    .slick-next,.slick-prev {
      color: #000000 !important;
      &:before {
        color: #000000;
      }
    }
  }
`;
const Slide = styled.div`
  width: 90%;
  display: flex !important;
  align-items: center;
  color: #000000;
  display:flex;
  justify-content: space-between;
  img {
  	width: 50%;
    height: 400px;
    margin-left: 25px;
  }
  .content {
    margin-left: 10px;
    margin-right: 25px;
    width: 300px;
    h2 {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      padding: 0 5px;
      margin: 10px 0 25px 0;
    }

  }
  @media (max-width: 769px) {
    flex-direction: column-reverse;
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
const Slider = () => {
  const settings = {
    className: 'slide_box',
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <Wrapper>
      <SlideSection>
        <Container>
          <div className="slide_inner_container">
            <SliderSlick {...settings}>
              <Slide key={1}>
                <img src={Slide1} alt="website calender" />
                <div className="content">
                  <h2>ملف شخصي خاص بك يسهل الوصول إليه من خلال البحث عبر الإنترنت </h2>
                </div>
              </Slide>
              <Slide key={2}>
                <img src={Slide2} alt="send messages" />
                <div className="content">
                  <h2>إدارة جدول مواعيدك المتاح عبر الإنترنت بكل سهولة واجذب مرضى آخرين</h2>
                </div>
              </Slide>
              <Slide key={3}>
                <img src={Slide3} alt="" />
                <div className="content">
                  <h2>تقليل من ظاهرة تأخر المرضى عن مواعيدهم من خلال نظام الاشعارات</h2>

                </div>
              </Slide>
            </SliderSlick>
          </div>
        </Container>
      </SlideSection>
    </Wrapper>

  );
};

export default Slider;
