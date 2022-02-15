import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SlideOverlay = () => {
  return (
    <Wrapper>
      <TitleWrap>
        <FrameWrap>
          <Image
            src="/images/slideOverlay/thumbnail-frame.png"
            width={190}
            height={130}
            alt="slide-top-thumbnail-frame"
          />
        </FrameWrap>
        <ThumbnailWrap>
          <Image
            src="/images/slideOverlay/thumbnail/thumbnail1.png"
            width="100%"
            height="100%"
            alt="slide-top-thumbnail-frame"
          />
        </ThumbnailWrap>
      </TitleWrap>
      <SlideWrap>
        <Username>dahyedahyunmom_amiejjerry</Username>
        <Content>
          <span>
            밖에가서 놀고싶어도 “땅콩할 시간이야!” 라는 말에 군말없이 들어와
            착석하는 마법같은 시간..
          </span>
          <span>줄 줄 책을 읽고 생각 말하라고 하는게 아니라,</span>
          <span>재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다.</span>
          <span>
            월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로 키워드를
            통해 확실하게 기억할 수 있도록 해주는
          </span>
          <span>금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!</span>
        </Content>
      </SlideWrap>
      <LeftBtn>
        <Image
          src="/images/slideOverlay/left-arrow.png"
          width="40px"
          height="40px"
          alt="left-sliding-btn"
        />
      </LeftBtn>
      <RightBtn>
        <Image
          src="/images/slideOverlay/right-arrow.png"
          width="40px"
          height="40px"
          alt="right-sliding-btn"
        />
      </RightBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 703px;
  /* padding: 159px 0 150px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/images/slideOverlay/background.png');
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleWrap = styled.div`
  margin-bottom: 50px;
  position: relative;
`;

const FrameWrap = styled.div``;

const ThumbnailWrap = styled.div`
  position: absolute;
  top: 0;
  left: 68px;
  width: 97px;
  height: 97px;
  border: 16px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
`;

const SlideWrap = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  align-items: center;
`;

const Username = styled.p`
  line-height: 28px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 50px;
`;

const Content = styled.div`
  font-size: 20px;
  line-height: 36px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftBtn = styled.div`
  position: absolute;
  top: 337px;
  left: 202px;
  cursor: pointer;
`;

const RightBtn = styled.div`
  position: absolute;
  top: 337px;
  right: 202px;
  cursor: pointer;
`;

export default SlideOverlay;
