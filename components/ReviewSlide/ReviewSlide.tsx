import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ReviewList, ReviewThumbnail } from 'components';

const ReviewSlide = () => {
  return (
    <Wrapper>
      <SlideHeader>
        <Image
          src="/images/slideOverlay/thumbnail-frame.png"
          width={195}
          height={130}
          alt="slide-thumbnail-frame"
        />
        <ThumbnailBorder></ThumbnailBorder>
      </SlideHeader>
      <ReviewList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 703px;
  padding: 159px 0 150px;
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  background-image: url('/images/slideOverlay/background.png');
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const SlideHeader = styled.div`
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
  /* z-index: 10; */
`;

export default ReviewSlide;
