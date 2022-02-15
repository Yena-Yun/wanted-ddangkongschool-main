import React from 'react';
import styled from 'styled-components';

const Footer = () => {

  return (
    <Contaniner>
      <InnerContainer>
        <FooterSectionBox>
          <FooterSection>
            <LeftSection>
              <Company>(주) 호두랩스</Company>
              <CompanyInfoBox>
                <AboutCompany>
                  <CompanyInfo>대표 : 김민우 | 사업자등록번호 : 431-88-01287</CompanyInfo>
                  <CompanyLink>사업자 정보 조회</CompanyLink>
                </AboutCompany>
                <CompanyInfo>서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)</CompanyInfo>
                <CompanyInfo>제주특별시 서귀포시 중정로 86, 304</CompanyInfo>
                <CompanyInfo>통신판매업 신고번호 : 2019-서울강남-00301호</CompanyInfo>
              </CompanyInfoBox>
              <CompanyInfo>© Hodoo Labs. ALL RIGHTS RESERVED</CompanyInfo>
            </LeftSection>
          
            <RightSection>
            <TextLinks>
              <CustomService>
                <CustomServiceLinkLeft>고객센터</CustomServiceLinkLeft>
                <CustomServiceLinkRight>채팅상담</CustomServiceLinkRight>
              </CustomService>
              <Tos>
                <CustomServiceLinkLeft>이용약관</CustomServiceLinkLeft>
                <TosMid>개인정보 처리방침</TosMid>
                <CustomServiceLinkRight>환불정책</CustomServiceLinkRight>
              </Tos>
            </TextLinks>
            <LogoLinks>
              <LeftLogoLinks>
                <LogoImg src="/images/footer_instaLogo.png" alt="푸터 인스타로고"></LogoImg>
              </LeftLogoLinks>
              <RightLogoLinks>
                <LogoImg src="/images/footer_cafeLogo.png" alt="푸터 카페로고"></LogoImg>
              </RightLogoLinks>
            </LogoLinks>
            </RightSection>
          </FooterSection>
        </FooterSectionBox>
      </InnerContainer>
    </Contaniner>
  );
}

const Contaniner = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  text-align: inherit;
`

const InnerContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 1200px){
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

const FooterSectionBox = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 60px 0px;

  @media screen and (min-width: 1200px){
    flex-direction: row;
  }

  @media screen and(min-width: 768px) {
    padding: 100px 0px;
  }
`

const FooterSection = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 60px 0px;

  @media screen and (min-width: 1200px){
    flex-direction: row;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 100px 0px;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`

const Company = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;
`

const CompanyInfoBox = styled.div`
  margin: 20px 0px;
`

const AboutCompany = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
`

const CompanyInfo = styled.div`
  display: block;
  color: rgb(51, 51, 51);
  font-weight: normal;
  opacity: 0.8;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.71;
  }
`

const CompanyLink = styled.a`
  color: rgb(51, 51, 51);
  margin-left: 5px;
  text-decoration: underline;
  font-size: 12px;
  line-height: 1.71;
  cursor: pointer;

  @media (min-width: 768px) {
    line-height: 1.71;
    font-size: 14px;
  }
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`

const TextLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`

const CustomService = styled.div`
  margin-top: 26px;
  margin-bottom: 10px;
  
  @media screen and (min-width: 1200px){
    margin-top: 0px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`

const CustomServiceLinkLeft = styled.a`
  color: rgb(51, 51, 51);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-right: 16px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-right: 20px;
  }
`

const CustomServiceLinkRight = styled.a`
  margin-right: 0px;
  color: rgb(51, 51, 51);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-right: 16px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-right: 20px;
  }
`

const Tos = styled.div`
`

const TosMid = styled.a`
  font-weight: bold;
  color: rgb(51, 51, 51);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-right: 16px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-weight: bold;
    font-size: 16px;
    margin-right: 20px;
  }
`

const LogoLinks = styled.div`
  display: flex;
`

const LeftLogoLinks = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-right: 20px;
  }
`

const RightLogoLinks = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`

const LogoImg = styled.img`
  width: 44px;
  height: 44px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`
export default Footer;




