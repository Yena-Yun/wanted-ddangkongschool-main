import React from 'react';
import styled from 'styled-components';
import slideReview from 'utils/constants/slideReview';
import ReviewCarousel from './ReviewCarousel';

const ReviewList = () => {
  return (
    <ReviewCarousel>
      {slideReview.map((review) => (
        <SlideWrap key={review.id}>
          <Username>{review.username}</Username>
          <Content>{review.content}</Content>
        </SlideWrap>
      ))}
    </ReviewCarousel>
  );
};

const SlideWrap = styled.div``;

const Username = styled.p`
  line-height: 28px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 20px;
  line-height: 36px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default ReviewList;
