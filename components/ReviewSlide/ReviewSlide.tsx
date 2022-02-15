import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ReviewList } from 'components';

const ReviewSlide = () => {
  return (
    <Wrapper>
      <TitleWrap>
        <Image
          src="/images/slideOverlay/thumbnail-frame.png"
          width={190}
          height={130}
          alt="slide-thumbnail-frame"
        />
        <ThumbnailBorder>
          <Image
            src="/images/slideOverlay/thumbnail/thumbnail1.png"
            width="100%"
            height="100%"
            alt="slide-thumbnail"
          />
        </ThumbnailBorder>
      </TitleWrap>
      <ReviewList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  padding: 159px 0 0;
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  background-image: url('/images/slideOverlay/background.png');
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleWrap = styled.div`
  margin-bottom: 50px;
  position: relative;
`;

const ThumbnailBorder = styled.div`
  width: 96px;
  height: 96px;
  border: 16px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 68px;
  z-index: 10;
`;

export default ReviewSlide;
