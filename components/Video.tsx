import React from 'react';
import styled from 'styled-components';

const Video = () => {
  const lineArr = Array(14).fill(0);

  return (
    <Wrapper>
      <Background>
        {lineArr.map((line, idx) => (
          <Line key={idx} />
        ))}
      </Background>
      <ContentWrap>
        <TextWrap>
          <Title data-aos="fade-up">
            랜선 라이브
            <br />
            북클래스
          </Title>
          <Content data-aos="fade-up">
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
      </ContentWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 115px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 800px;
  z-index: 2;
  border: #000000;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const ContentWrap = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    ${({ theme }) => theme.common.flexColumn}
    align-items: center;
  }
`;

const Line = styled.div`
  height: 2px;
  background: #000000;
  opacity: 0.05;
  margin-bottom: 56px;
`;

const TextWrap = styled.div`
  margin-right: 110px;
  z-index: 3;

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 50px;
  text-align: center;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.default};
  text-align: center;
`;

const VideoWrap = styled.div`
  width: 700px;
  height: 526px;
  background-image: url('https://ddangkongschool.com/846f50a75a26614fdd5ec2b06f49660f.png');
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 3;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    display: flex;
    justify-content: center;
  }

  & video {
    width: 540px;
    margin-top: 58px;
    margin-left: 80px;
    border-radius: 10px;
    position: absolute;
    top: 0;

    @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
      margin: 0;
      width: 543px;
      top: 59px;
      left: 79px;
    }
  }
`;

export default Video;
