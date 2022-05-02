import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Download = () => {
  return (
    <Contaniner>
      <InnerContainner>
        <Header>
          <Title data-aos="fade-up">지금 다운로드 받으세요!</Title>
        </Header>
        <TicketImgBox>
          <Image
            src="/images/style10_1.png"
            alt="TicketImg"
            width={360}
            height={613}
          />
          <MobileTicketImg src="/images/style10_3.png" alt="MobileTicketImg" />
          <InnerTicketImgBox>
            <LogoImgBox>
              <Image src="/images/style10_2.png" alt="LogoImg" />
            </LogoImgBox>
            <InnerSection>
              <Section>
                책을 보는 <br />
                <div style={{ margin: '20px 0' }}>새로운 방법</div>
              </Section>
            </InnerSection>
            <InnerBottom>
              <Bottom>
                지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!
              </Bottom>
              <MobileBottom>
                지금 가입하시면 <br />
                매주 8권의 동화책을 보실 수 있어요!
              </MobileBottom>
            </InnerBottom>
          </InnerTicketImgBox>
          <DownloadImgSection>
            <SignupDesc>회원가입에 걸리는 시간 단 3초</SignupDesc>
            <DownloadBox>
              <DownloadDesc>앱 다운로드 하기</DownloadDesc>
            </DownloadBox>
          </DownloadImgSection>
        </TicketImgBox>
      </InnerContainner>
    </Contaniner>
  );
};

const Contaniner = styled.div`
  overflow-x: hidden;
  background-color: rgb(249, 249, 249);
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`;

const InnerContainner = styled.div`
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
  font-size: 30px;
  font-weight: bold;
  line-height: 0.8;
  color: rgb(51, 51, 51);

  @media screen and (min-width: 1200px) {
    font-size: 50px;
    line-height: 1.44;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 50px;
    line-height: 1.44;
  }
`;

const TicketImgBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 60px;
  margin-bottom: 116px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    width: 1240px;
    height: 534px;
    margin-bottom: 80px;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    flex-direction: row;
    width: 994px;
    height: 534px;
    margin-bottom: 80px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    flex-direction: row;
    width: 808px;
    height: 534px;
    margin-bottom: 80px;
  }
`;

const TicketImg = styled.img`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const MobileTicketImg = styled.img`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const InnerTicketImgBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  padding-top: 94px;
  padding-left: 0px;

  @media screen and (min-width: 1200px) {
    width: 640px;
    padding-left: 60px;
    padding-top: 124px;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    width: 572px;
    padding-left: 10px;
    padding-top: 124px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 407px;
    padding-left: 50px;
    padding-top: 124px;
  }
`;

const LogoImgBox = styled.div`
  width: 92.7px;
  height: 30px;

  @media (min-width: 768px) {
    width: 155px;
    height: 50px;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
const InnerSection = styled.div`
  padding-top: 19px;
`;
const Section = styled.div`
  font-family: S-CoreDream-3;
  font-size: 36px;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;
const InnerBottom = styled.div`
  @media (min-width: 768px) {
    padding-top: 20px;
  }
`;

const Bottom = styled.div`
  display: none;

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
    display: block;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
    display: block;
  }
`;

const MobileBottom = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 950px) {
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
    display: block;
  }
`;

const DownloadImgSection = styled.div`
  align-items: center;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
  z-index: 2;
  padding-top: 107px;
  margin-left: 0;

  @media screen and (min-width: 1200px) {
    padding-left: 110px;
    padding-top: 182px;
    margin-right: 25px;
    align-items: flex-start;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    flex: initial;
    padding-left: 54px;
    padding-top: 182px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    padding-left: 20px;
    padding-top: 198px;
    margin-right: 25px;
    align-items: flex-start;
    margin-left: 20px;
  }
`;

const SignupDesc = styled.div`
  font-size: 14px;
  line-height: 1.71;
  text-align: center;
  color: rgb(51, 51, 51);

  @media screen and (min-width: 1200px) {
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.8;
  }
`;

const DownloadBox = styled.div`
  cursor: pointer;
  background-color: rgb(51, 51, 51);
  width: 280px;
  height: 50px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 10px;

  @media screen and (min-width: 1200px) {
    width: 282px;
    height: 80px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 250px;
    height: 80px;
  }
`;

const DownloadDesc = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.71;
  text-align: center;
  color: rgb(255, 255, 255);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export default Download;
