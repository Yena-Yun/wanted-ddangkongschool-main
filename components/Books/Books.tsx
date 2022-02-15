import React from 'react';
import styled from 'styled-components';
import BookList from './BookList';

const Books = () => {

  return (
    <Contaniner>
      <InnerContainner>
        <Header>
          <TitleBox>
            <div>
              <Title>입학 전 1000권 읽기! <br />
              땅콩스쿨로 도전해보세요.</Title>
              <MobileTitle>입학 전 1000권 읽기! <br />
              땅콩스쿨로 <br />
              도전해보세요.</MobileTitle>
            </div>
          </TitleBox>
          <TitleBox>
            <div>
              <SubTitle>매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요. <br />
              독서를 통해 배움의 즐거움을 알아가 보세요.</SubTitle>
              <MobileSubTitle>매달 새로운 32권의 <br />
              어린이 베스트 셀러를 만날 수 있어요. <br />
              독서를 통해 배움의 즐거움을 알아가 보세요.</MobileSubTitle>
            </div>
          </TitleBox>
        </Header>
        <Content>
          {/* Book List */}
          <BookList/>
        </Content>
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
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`

const Header = styled.div`
  margin-top: 150px;
`

const TitleBox = styled.div`
  top: 0px;
  opacity: 1;
`

const Title = styled.div`
  display: none;

  @media (min-width: 768px){
    display: block;
    font-size: 50px;
    line-height: 1.44;
    font-weight: bold;
    color: rgb(51, 51, 51);
    text-align: center;
  }
`

const MobileTitle = styled.div`
  display: none;

  @media (max-width: 768px){
    display: block;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.47;
    color: rgb(51, 51, 51);
    text-align: center;
  }
`

const SubTitle = styled.div`
  display: none;

  @media (min-width: 768px){
    display: block;
    padding-top: 50px;
    font-size: 24px;
    line-height: 1.67;
    text-align: center;
    color: rgb(51, 51, 51);
  }
`

const MobileSubTitle = styled.div`
  display: none;

  @media (max-width: 768px){
    display: block;
    padding-top: 27px;
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    color: rgb(51, 51, 51);
  }
`

const Content = styled.div`
  text-align: center;
  overflow-x: hidden;
  margin-bottom: 100px;
  margin-top: 60px;
  height: 135px;
  width: 1755px;
  text-align: left;

  @media screen and (min-width: 1200px){
    margin-bottom: 150px;
    margin-top: 100px;
    height: 250px;
    width: 3570px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin-bottom: 150px;
    margin-top: 100px;
    height: 250px;
    width: 3570px;
  }
`

export default Books;