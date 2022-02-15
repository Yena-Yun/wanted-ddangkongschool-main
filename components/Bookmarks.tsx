import React from 'react';
import styled from 'styled-components';

const Bookmarks = () => {

  return (
    <Contaniner>
      <InnerContainner>
        <Section>
          <HeaderSection>
            <HeaderBox>
              <Header>
                땅콩스쿨만의 특징
              </Header>
            </HeaderBox>
          </HeaderSection>
          <MarksSection>
            <Marks>
              <LeftMark>
                <LeftMarkImg src="/images/marks/mark1.png" alt="FirMarkImg"/>
                <TitleBox>
                  <Title>화상수업</Title>
                </TitleBox>
                <SubTitleBox>
                  <SubTitle>휴대폰이나 태블릿으로 <br />
                  시간이나 장소 관계없이 <br />
                  편하게 수업을 들어보세요.</SubTitle>
                  <MobileSubTitle>휴대폰이나 태블릿으로 <br />
                  시간이나 장소 관계없이 <br />
                  편하게 수업을 들어보세요.</MobileSubTitle>
                  <TabSubTitle>휴대폰이나 태블릿으로 시간이나  <br />
                  장소 관계없이 편하게 수업을 들어보세요.</TabSubTitle>
                </SubTitleBox>
              </LeftMark>
            </Marks>
            <Marks>
              <MidMark>
                <MidMarkImg src="/images/marks/mark2.png" alt="DeskTopImg"/>
                <TitleBox>
                  <Title>양방향</Title>
                </TitleBox>
                <SubTitleBox>
                  <SubTitle>화면에 그림도 그려보고, <br />
                    읽은 책으로 선생님과 <br />
                    퀴즈도 풀어보는 양방향 <br />
                    수업을 경험해보세요.</SubTitle>
                    <MobileSubTitle>화면에 그림도 그려보고, 읽은 책으로 <br />
                    선생님과 퀴즈도 풀어보는 <br />
                    양방향 수업을 경험해보세요.</MobileSubTitle>
                    <TabSubTitle>화면에 그림도 그려보고, 읽은 책으로 선생님과 <br />
                    퀴즈도 풀어보는 양방향 수업을 경험해보세요.</TabSubTitle>
                </SubTitleBox>
              </MidMark>
            </Marks>
            <Marks>
              <RightMark>
                <RightMarkImg src="/images/marks/mark3.png" alt="DeskTopImg"/>
                <TitleBox>
                  <Title>캐릭터</Title>
                </TitleBox>
                <SubTitleBox>
                  <SubTitle>친숙한 캐릭터와 <br />
                    목소리로 수업에 대한 <br />
                    부담을 낮춰보세요.</SubTitle>
                    <MobileSubTitle>친숙한 캐릭터와 목소리로 <br />
                    수업에 대한 부담을 낮춰보세요.</MobileSubTitle>
                    <TabSubTitle>친숙한 캐릭터와 목소리로 수업에 대한 <br />
                    부담을 낮춰보세요.</TabSubTitle>
                </SubTitleBox>
              </RightMark>
            </Marks>
          </MarksSection>
        </Section>
      </InnerContainner>
    </Contaniner>
  );
}

const Contaniner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`

const InnerContainner = styled.div`
  background-color: rgb(249, 249, 249);
  overflow-x: hidden;
  margin-bottom: -50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`
const Section = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 1200px){
    padding-top: 150px;
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-top: 150px;
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const HeaderSection = styled.div`
  margin: 0px auto;
`

const HeaderBox = styled.div`
  top: 0px;
  opacity: 1;
`

const Header = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: rgb(51, 51, 51);

  @media screen and (min-width: 1200px){
    font-size: 50px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 50px;
  }
`

const MarksSection = styled.div`
  overflow-x: hidden;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 50px;
  overflow: hidden;
  

  @media screen and (min-width: 1200px){
    overflow-x: hidden;
    justify-content: center;
    align-items: flex-start;
    width: 1380px;
    display: flex;
    margin-top: 80px;
    margin-bottom: 0px;
    overflow: hidden;
    flex-direction: row;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    margin-top: 40px;
    margin-bottom: 101px;
  }
`

const Marks = styled.div`
  top: 0px;
  opacity: 1;
`

const LeftMark = styled.div`
  background-image: url(https://ddangkongschool.com/86e2b34f195de559b1e0b75027590801.png);
  background-size: 360px 458px;
  margin-right: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-position: center center;
  background-repeat: no-repeat;
  width: 360px;
  height: 458px;

  @media screen and (min-width: 1200px){
    background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
    background-size: 460px 651px;
    margin-right: -70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-position: center center;
    background-repeat: no-repeat;
    width: 460px;
    height: 651px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    background-image: url(https://ddangkongschool.com/ddf7d90d2fd5ce5acda239619a9d586f.png);
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
    margin-right: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-position: center center;
    background-repeat: no-repeat;
  }
`

const LeftMarkImg = styled.img`
  margin-top: 121px;
  width: 80px;
  height: 80px;

  @media (min-width: 768px){
    margin-top: 174px;
    width: 116px;
    height: 116px;
  }
`
const TitleBox = styled.div`
  margin: 0px auto;
  margin-top: 30px;

  @media (min-width: 768px){
    margin-top: 50px;
  }
`
const Title = styled.div`
  font-weight: bold;
  text-align: center;
  color: rgb(51, 51, 51);
  font-size: 20px;

  @media (min-width: 768px){
    font-size: 30px;
  }
`
const SubTitleBox = styled.div`
  margin: 0px auto;
  margin-top: 20px;

  @media (min-width: 768px){
    margin-top: 30px;
  }
`
const SubTitle = styled.div`
  display: none;
  @media (min-width: 1200px){
    display: block;
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: none;
  }
`

const TabSubTitle = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    font-size: 20px;
    text-align: center;
    color: rgb(51, 51, 51);
    font-size: 20px;
    line-height: 1.8;
  }
`

const MobileSubTitle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: rgb(51, 51, 51);
  }
`

const MidMark = styled.div`
  background-image: url(https://ddangkongschool.com/86e2b34f195de559b1e0b75027590801.png);
  background-size: 360px 458px;
  margin-right: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-position: center center;
  background-repeat: no-repeat;
  width: 360px;
  height: 458px;

  @media screen and (min-width: 1200px){
    background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
    background-size: 460px 651px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-position: center center;
    background-repeat: no-repeat;
    width: 460px;
    height: 651px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    background-image: url(https://ddangkongschool.com/ddf7d90d2fd5ce5acda239619a9d586f.png);
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
    margin-right: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-position: center center;
    background-repeat: no-repeat;
  }
`

const RightMark = styled.div`
  background-image: url(https://ddangkongschool.com/86e2b34f195de559b1e0b75027590801.png);
  background-size: 360px 458px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-position: center center;
  background-repeat: no-repeat;
  width: 360px;
  height: 458px;

  @media screen and (min-width: 1200px){
    background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
    margin-top: 0px;
    margin-left: -70px;
    background-size: 460px 651px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-position: center center;
    background-repeat: no-repeat;
    width: 460px;
    height: 651px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    background-image: url(https://ddangkongschool.com/ddf7d90d2fd5ce5acda239619a9d586f.png);
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
    margin-right: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-position: center center;
    background-repeat: no-repeat;
  }
`

const MidMarkImg = styled.img`
  margin-top: 121px;
  width: 80px;
  height: 80px;

  @media (min-width: 768px){
    margin-top: 174px;
    width: 116px;
    height: 116px;
  }
`

const RightMarkImg = styled.img`
  margin-top: 121px;
  width: 80px;
  height: 80px;

  @media (min-width: 768px){
    margin-top: 174px;
    width: 116px;
    height: 116px;
  }
`

export default Bookmarks;