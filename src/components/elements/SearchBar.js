import React from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import Container from './Container';
import Wrapper from './Wrapper';


const ColoredButton = styled.div`
  width: 21%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eae9e9;
  color: #5b5b5b;
  border-left: 1px solid #9c9393
`;
const SelectButton = styled(ColoredButton)`
  display: flex;
  flex-direction: row;
  position: relative;
  text-align: center;
  &:first-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .search_nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 8px;
    text-align: center;
  }
  svg {
    position: absolute;
    top: 18px;
    left: 12px;
  }
  .search_nav_title {
    font-size: 14px;
  }
  .search_nav_value {
    color: #4bccff;
    font-size: 17px;
  }
  .search_nav_flow_dir {
    position: absolute;
    top: 8px;
    right: -12px;
    height: 32px;
    width: 22px;
    background-color: #4bccff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
  }
  @media (max-width: 769px) {
    border-radius: 5px;
  }
  `;
const SearchButton = styled(ColoredButton)`
  background: #FFC107;
  color: #fff;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: relative;
  &:hover {
    background-color: red;
  }
  @media (max-width: 769px) {
    border-radius: 5px;
    margin-bottom: 5px;

  }
`;
const SearchForm = styled(Container.Row)`
  border-radius: 5px;
  form {
    border-radius: 5px;
    display: flex;
    width: 100%;
  }
`;
const SearchInput = styled.div`
  height: 55px;
  background-color: #eae9e9;
  color: #636375;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 90%;
    height: 25px !important;
    font-size: 18px !important;
    padding-right: 8px;
    border: solid 1px #00BCD4;
    background-color: #f5f5f5;
    border-radius: 3px;
  }
  @media (max-width: 769px) {
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;
const MiddleWrapper = styled(Wrapper)`
  padding: 0;
  position: relative;
  border-radius: 5px;
  margin: 12px 0;

  @media (max-width: 769px) {
    border-radius: 0;
    &:after {
      display: none;
    }
    form {
      width: 100%;
      flex-direction: column;
      ${SelectButton} {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #9c9393;
        border-left: none;
        .search_nav {
          margin-right: 15px;
        }
      }
      ${SearchInput} {
        width: 100%;
      }
      ${SearchButton} {
        width: 100%;
      }
    }
  }
  `;
const theme = {
  main: '#FFFFFF',
};

const SearchBar = () => (
  <MiddleWrapper theme={theme}>
    <Container>
      <SearchForm>
        <form>
          <SelectButton>
            <div className="search_nav">
              <div className="search_nav_title">أنا ابحث عن أخصائي</div>
              <div className="search_nav_value">أسنان</div>
            </div>
            <FaAngleDown />
          </SelectButton>
          <SelectButton>
            <div className="search_nav_flow_dir">او</div>
            <div className="search_nav">
              <div className="search_nav_title">في مدينة</div>
              <div className="search_nav_value">غزة</div>
            </div>
            <FaAngleDown />
          </SelectButton>
          <SelectButton>
            <div className="search_nav_flow_dir">او</div>
            <div className="search_nav">
              <div className="search_nav_title">يقدم خدمة</div>
              <div className="search_nav_value">تبيض اسنان</div>
            </div>
            <FaAngleDown />
          </SelectButton>
          <SearchInput>
            <div className="search_nav_title">ادخل اسم طبيب الأسنان</div>
            <input type="text" placeholder="ادخل اسم طبيب الأسنان" />
          </SearchInput>
          <SearchButton>ابحث</SearchButton>
        </form>
      </SearchForm>
    </Container>
  </MiddleWrapper>

);

export default SearchBar;
