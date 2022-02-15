import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Video = () => {
  return (
    <Wrapper>
      <TextWrap>
        <Title>
          랜선 라이브
          <br />
          북클래스
        </Title>
        <Content>
          친구들과 함께 <br />
          그림 그리기, 퀴즈 풀기. <br />
          선생님과 대화하며 경험해요!
        </Content>
      </TextWrap>

      <VideoWrap>
        <video autoPlay loop muted>
          <source src="/movies/main-video.mp4" type="video/mp4" />
        </video>
      </VideoWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 873px;
  ${({ theme }) => theme.common.flexCenter}
`;

const TextWrap = styled.div`
  margin-right: 110px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.default};
`;

const VideoWrap = styled.div`
  height: 527px;
  border: 16px solid ${({ theme }) => theme.color.default};
  border-radius: 15px;

  & video {
    height: 100%;
  }
`;

export default Video;
