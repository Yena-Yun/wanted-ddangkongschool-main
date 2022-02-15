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
  margin-top: 150px;
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
  }

  @media screen and(min-width: 768px) {
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
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 1200px){
    font-size: 50px;
  }

  @media screen and(min-width: 768px) {
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const MarksSection = styled.div`
  overflow-x: hidden;
  justify-content: center;
  align-items: flex-start;
  width: 1380px;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 0px;
  overflow: hidden;
`

const Marks = styled.div`
  top: 0px;
  opacity: 1;
`

const LeftMark = styled.div`
  background-size: 460px 651px;
  margin-right: -70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
  background-position: center center;
  background-repeat: no-repeat;
  width: 360px;
  height: 458px;

  @media (min-width: 1200px){
    width: 460px;
    height: 651px;
  }

  @media screen and(min-width: 768px) {
    width: 580px;
    height: 609px;
  }
`

const LeftMarkImg = styled.img`
  margin-top: 174px;
  width: 116px;
  height: 116px;
`
const TitleBox = styled.div`
  margin: 0px auto;
  margin-top: 50px;
`
const Title = styled.div`
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  @media (min-width: 1200px){
    font-size: 30px;
  }
`
const SubTitleBox = styled.div`
  margin: 0px auto;
  margin-top: 30px;
`
const SubTitle = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 1200px){
    font-size: 20px;
    line-height: 1.8;
  }
`

const MidMark = styled.div`
 background-size: 460px 651px;
  margin-right: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
  background-position: center center;
  background-repeat: no-repeat;
  width: 360px;
  height: 458px;

  @media (min-width: 1200px){
    width: 460px;
    height: 651px;
  }

  @media screen and(min-width: 768px) {
    width: 580px;
    height: 609px;
  }
`

const RightMark = styled.div`
background-size: 460px 651px;
  margin-top: 0px;
  margin-left: -70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
  background-position: center center;
  background-repeat: no-repeat;
  width: 360px;
  height: 458px;

  @media (min-width: 1200px){
    width: 460px;
    height: 651px;
  }

  @media screen and(min-width: 768px) {
    width: 580px;
    height: 609px;
  }
`

const MidMarkImg = styled.img`
  margin-top: 174px;
  width: 116px;
  height: 116px;
`

const RightMarkImg = styled.img`
  margin-top: 174px;
  width: 116px;
  height: 116px;
`

export default Bookmarks;