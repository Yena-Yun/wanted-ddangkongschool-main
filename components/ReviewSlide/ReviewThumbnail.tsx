import React from 'react';
import styled from 'styled-components';
import slideReview from 'utils/constants/slideReview';
import ReviewThumbnailCarousel from './ReviewThumbnailCarousel';

const ReviewThumbnail = () => {
  return (
    <ThumbnailWrap>
      <ReviewThumbnailCarousel>
        {slideReview.map((review, idx) => (
          <div key={review.id}>
            <Thumbnail src={review.thumbnail} alt="slide-thumbnail" />
          </div>
        ))}
      </ReviewThumbnailCarousel>
    </ThumbnailWrap>
  );
};

const ThumbnailWrap = styled.div`
  position: absolute;
  top: 15.5px;
  left: 81px;
  z-index: 5;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export default ReviewThumbnail;
