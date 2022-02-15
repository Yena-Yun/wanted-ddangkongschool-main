import React from 'react';
import styled from 'styled-components';

const Download = () => {

  return (
    <Contaniner>
      <InnerContainner>
        <Header>
          <Title>지금 다운로드 받으세요!</Title>
        </Header>
        <TicketImgBox>
          <TicketImg src="/images/style10_1.png" alt="TicketImg"/>
          <InnerTicketImgBox>
            <LogoImgBox>
              <LogoImg src="/images/style10_2.png" alt="LogoImg"/>
            </LogoImgBox>
          <InnerSection>
            <Section>
              책을 보는 <br />
              <div style={{margin: "20px 0"}}>새로운 방법</div>
            </Section>
          </InnerSection>
          <InnerBottom>
            <Bottom>
              지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!
            </Bottom>
          </InnerBottom>
          </InnerTicketImgBox>
          <DownloadImgSection>
            <SignupDescBox>
            <SignupDesc>
              회원가입에 걸리는 시간 단 3초
            </SignupDesc>
            </SignupDescBox>
            <DownloadBox>
              <DownloadDescBox>
                <DownloadDesc>
                  앱 다운로드 하기
                </DownloadDesc> 
              </DownloadDescBox>
            </DownloadBox>
          </DownloadImgSection>
        </TicketImgBox>
      </InnerContainner>
    </Contaniner>
  );
}

const Contaniner = styled.div`
  overflow-x: hidden;
  background-color: rgb(249, 249, 249);
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`

const InnerContainner = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media (min-width: 1200px){
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0px auto;
  }

  @media screen and(min-width: 768px) {
    width: 100%;
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const Header = styled.div`
  white-space: pre-wrap;
  text-align: center;
`

const Title = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-weight: bold;

  @media (min-width: 1200px){
    font-size: 50px;
    line-height: 1.44;
  }

  @media screen and(max-width: 768px) {
    font-size: 50px;
    line-height: 1.44;
  }
`

const TicketImgBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 613px;
  margin-top: 60px;
  margin-bottom: 116px;

  @media (min-width: 1200px){
    width: 1240px;
    height: 534px;
  }

  @media screen and(min-width: 768px){
    width: 808px;
    height: 534px;
    margin-bottom: 80px;
  }
`

const TicketImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const InnerTicketImgBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  padding-top: 94px;
  padding-left: 0px;

  @media (min-width: 1200px) {
    width: 640px;
    padding-left: 140px;
    padding-top: 124px;
  }

  @media screen and(min-width: 768px){
    width: 407px;
    padding-left: 66px;
    padding-top: 124px;
  }
`

const LogoImgBox = styled.div`
  width: 92.7px;
  height: 30px;

  @media (min-width: 768px){
    width: 155px;
    height: 50px;
  }
`

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`
const InnerSection = styled.div`
  padding-top: 19px;
`
const Section = styled.div`
  white-space: pre-wrap;
  font-family: S-CoreDream-3;
  font-size: 36px;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px){
    font-size: 56px;
  }
`
const InnerBottom = styled.div`
  padding-top: 20px;
`
const Bottom = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px){
    font-size: 20px;
    line-height: 1.8;
  }
`

const DownloadImgSection = styled.div`
  align-items: flex-start;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
  z-index: 2;
  padding-top: 107px;

  @media (min-width: 1200px) {
    padding-left: 177px;
    padding-top: 182px;
  }

  @media screen and(min-width: 768px){
    padding-left: 60px;
    padding-top: 198px;
  }
`

const SignupDescBox = styled.div`
  margin-left: 16px;
`

const SignupDesc = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px){
    font-size: 20px;
    line-height: 1.8;
  }
`

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

  @media (min-width: 1200px) {
    width: 282px;
    height: 80px;
  }

  @media screen and(min-width: 768px){
    width: 250px;
    height: 80px;
  }
`

const DownloadDescBox = styled.div`
`

const DownloadDesc = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: rgb(255, 255, 255);

  @media (min-width: 768px){
    font-size: 24px;
    line-height: 1;
  }
`
export default Download;


