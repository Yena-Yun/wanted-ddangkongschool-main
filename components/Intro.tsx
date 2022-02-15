import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <Wrapper>
      <Animation>
        <LogoAni src={'/images/logo-animation.gif'} alt="logo-animation" />
      </Animation>
      <Title>땅콩스쿨이란?</Title>
      <Content>
        <span>실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,</span>
        <span>
          친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
          서비스입니다.
        </span>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.primary};
  padding: 150px 0;
  ${({ theme }) => theme.common.flexColumn}
  align-items: center;
`;

const Animation = styled.div`
  height: 60px;
  margin-bottom: 30px;
`;

const LogoAni = styled.img`
  height: 100%;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 300;
  line-height: 72px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.common.flexColumn}
  align-items: center;
`;

export default Intro;
