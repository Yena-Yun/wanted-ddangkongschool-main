import React from 'react';
import styled from 'styled-components';
import slideReview from 'utils/constants/slideReview';
import ReviewCarousel from './ReviewCarousel';
import Image from 'next/image';
import { ReviewThumbnail } from 'components';

const ReviewList = () => {
  return (
    <ReviewCarousel>
      {slideReview.map((review) => (
        <div key={review.id}>
          <ThumbnailWrap>
            <Thumbnail src={review.thumbnail} alt="slide-thumbnail" />
          </ThumbnailWrap>
          <Username>{review.username}</Username>
          <Content>{review.content}</Content>
        </div>
      ))}
    </ReviewCarousel>
  );
};

const ThumbnailWrap = styled.div`
  position: absolute;
  top: -400px;
  left: 1100px;
  width: 97px;
  height: 97px;
  z-index: 1000;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Username = styled.p`
  display: flex;
  justify-content: center;
  line-height: 28px;
  color: ${({ theme }) => theme.color.white};
  margin: 50px 0;
`;

const Content = styled.div`
  font-size: 20px;
  line-height: 36px;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
`;

export default ReviewList;
