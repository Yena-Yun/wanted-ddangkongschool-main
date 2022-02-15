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
            </div>
          </TitleBox>
          <TitleBox>
            <div>
              <SubTitle>매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요. <br />
              독서를 통해 배움의 즐거움을 알아가 보세요.</SubTitle>
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
  font-size: 30px;
  font-weight: bold;
  line-height: 1.47;
  text-align: center;
  color: rgb(51, 51, 51);
}

  @media (min-width: 768px){
    font-size: 50px;
    line-height: 1.44;
  }
`

const SubTitle = styled.div`
  padding-top: 50px;
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  color: rgb(51, 51, 51);
}

  @media (min-width: 768px){
    font-size: 24px;
    line-height: 1.67;
  }
`

const Content = styled.div`
  margin-bottom: 150px;
  margin-top: 100px;
  text-align: center;
  overflow-x: hidden;
`

export default Books;