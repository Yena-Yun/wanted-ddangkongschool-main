import React from 'react';
import styled from 'styled-components';

export default function Style5() {

  return (

    <Contaniner>
      <InnerContainner>
        <Header>
          <div>
          <Title>실시간 방송 형태로 제공되는 신개념 책 읽기</Title>
          <SubTitle>방송 중이라면 언제든 접속하세요. 수강신청, 수업예약 없이 편하게 수업참여가 가능해요.</SubTitle>
          </div>
        </Header>
        <ImgBox>
          <DeskTopImg src="/images/style5-1.png" alt="DeskTopImg"/>
          <MobileImg src="/images/style5-2.png" alt="MobileImg"/>
        </ImgBox>
      </InnerContainner>
    </Contaniner>
  );
}

const Contaniner = styled.div`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
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

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const Header = styled.div`
  white-space: pre-wrap;
  text-align: center;
  /* font-weight: bold; */
`

const Title = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-weight: bold;

  @media (min-width: 1200px){
    font-size: 50px;
    line-height: 1.44;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 50px;
    line-height: 1.44;
  }
`
const SubTitle = styled.header`
  padding-top: 50px;
  white-space: pre-wrap;

  @media (min-width: 1200px){
    font-size: 24px;
    line-height: 1.67;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 24px;
    line-height: 1.67;
  }
`

const ImgBox = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 97px;
`

const DeskTopImg = styled.img`
  flex-direction: row;
  position: relative;
  left: -98px;

  @media (min-width: 1200px){
    width: 1124px;
    height: 885px;
  }

  /* @media (min-width: 768px) and (max-width: 1200px) {
    width: 658px;
    height: 548px;
  } */
`

const MobileImg = styled.img`
  position: absolute;
  top: 77px;
  left: 554px;

  @media (min-width: 1200px){
    width: 823px;
    height: 851px;
  }

  /* @media (min-width: 768px) and (max-width: 1200px) {
    width: 505px;
    height: 527px;
  } */
`

