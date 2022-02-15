import React from 'react';
import styled from 'styled-components';
import { ReviewList, ReviewThumbnail } from 'components';

const ReviewSlide = () => {
  return (
    <Wrapper>
      <ReviewThumbnail />
      <ReviewList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 703px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/images/slideOverlay/background.png');
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SlideWrap = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  align-items: center;
`;

export default ReviewSlide;
