import React from 'react';
import styled from 'styled-components';

const DiaryBook = () => {

  return (
    <Contaniner>
      <InnerContainner>
        <Header>
          <Title>매일 매일 <br />
          알아서 기록하는 독서 일기</Title>
          <SubTitle>오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요. <br />
          읽기만 해도 자동으로 기록되고, 공유도 가능해요.</SubTitle>
        </Header>
        <ImgBox>
          <DeskTopImg src="/images/style6.png" alt="DeskTopImg"/>
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

  @media screen and(min-width: 768px) {
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

  @media screen and(min-width: 768px) {
    font-size: 24px;
    line-height: 1.67;
  }
`

const ImgBox = styled.div`
  margin-top: 0px;
  margin-bottom: 47px;
`

const DeskTopImg = styled.img`
  width: 360px;
  height: 345px;

  @media (min-width: 1200px){
    width: 1288px;
    height: 1014px;
  }

  @media screen and(min-width: 768px) {
    width: 873px;
    height: 686px;
  }
`

export default DiaryBook;
