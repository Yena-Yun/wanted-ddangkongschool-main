import React from 'react';
import styled from 'styled-components';
import { ReviewList, SlideBtn } from 'components';

const ReviewSlide = () => {
  return (
    <Wrapper>
      <ReviewList />
      <SlideBtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: relative; */
  width: 100vw;
  height: 703px;
  /* padding: 159px 0 150px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url('/images/slideOverlay/background.png'); */
  background-position: 75% center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SlideWrap = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  align-items: center;
`;

export default ReviewSlide;
