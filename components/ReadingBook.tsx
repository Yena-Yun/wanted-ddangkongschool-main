import React from 'react';
import styled from 'styled-components';

const ReadingBook = () => {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <Title data-aos="fade-up">
            실시간 방송 형태로 제공되는 <br />
            신개념 책 읽기
          </Title>
          <TabTitle data-aos="fade-up">
            실시간 방송 형태로 <br />
            제공되는 <br />
            신개념 책 읽기
          </TabTitle>
          <SubTitle data-aos="fade-up">
            방송 중이라면 언제든 접속하세요. <br />
            수강신청, 수업예약 없이 편하게 수업참여가 가능해요.
          </SubTitle>
          <TabSubTitle data-aos="fade-up">
            방송 중이라면 언제든 접속하세요. <br />
            수강신청, 수업예약 없이 <br />
            편하게 수업참여가 가능해요.
          </TabSubTitle>
        </Header>
        <ImgBox>
          <DeskTopImg src="/images/style5_1.png" alt="DeskTopImg" />
          <MobileImg src="/images/style5_2.png" alt="MobileImg" />
          <MobileSmallImg
            src="/images/mobileStyle5_2.png"
            alt="MobileSmallImg"
          />
        </ImgBox>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`;

const InnerContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    padding-top: 150px;
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0px auto;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-top: 150px;
    width: 100%;
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 50px;
    line-height: 1.44;
    font-weight: bold;
  }
`;

const TabTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-weight: bold;
    font-size: 30px;
    line-height: 1.47;
    color: rgb(51, 51, 51);
  }
`;

const SubTitle = styled.header`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding-top: 50px;
    font-size: 24px;
    line-height: 1.67;
    color: rgb(51, 51, 51);
  }
`;

const TabSubTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-top: 27px;
    font-size: 16px;
    line-height: 1.75;
    color: rgb(51, 51, 51);
  }
`;

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 83px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 97px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-bottom: 112px;
  }
`;

const DeskTopImg = styled.img`
  flex-direction: row;
  position: relative;
  left: -10px;
  width: 323px;
  height: 277px;

  @media screen and (min-width: 1200px) {
    left: -78px;
    width: 1124px;
    height: 885px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    left: -78px;
    width: 658px;
    height: 548px;
  }
`;

const MobileImg = styled.img`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 77px;
    left: 554px;
    width: 823px;
    height: 851px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    position: absolute;
    width: 505px;
    height: 527px;
    top: 47px;
    left: 305px;
  }
`;

const MobileSmallImg = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 49px;
    left: 209px;
    width: 132px;
    height: 240px;
  }
`;
export default ReadingBook;
