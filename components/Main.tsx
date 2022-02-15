import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <TitleWrap>
        <Title>
          책 읽는 재미,
          <br />
          <span>땅콩스쿨</span>이<br />
          만들어줄게요!
        </Title>
      </TitleWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('https://ddangkongschool.com/8358b32838f4b212cf113ad6c4ea9996.jpg');
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleWrap = styled.div`
  margin-top: 300px;
  padding: 0 30px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};

  & span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default Main;
