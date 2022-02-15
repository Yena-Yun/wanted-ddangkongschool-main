import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import slideReview from 'utils/constants/slideReview';

const ReviewThumbnail = () => {
  return (
    <>
      {slideReview.map((review) => {
        <TitleWrap>
          <Image
            src="/images/slideOverlay/thumbnail-frame.png"
            width={190}
            height={130}
            alt="slide-thumbnail-frame"
          />
          <ThumbnailWrap>
            <Image
              src={review.thumbnail}
              width="100%"
              height="100%"
              alt="slide-thumbnail"
            />
          </ThumbnailWrap>
        </TitleWrap>;
      })}
    </>
  );
};

const TitleWrap = styled.div`
  margin-bottom: 50px;
`;

const ThumbnailWrap = styled.div`
  width: 126px;
  height: 126px;
  border: 16px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
`;

export default ReviewThumbnail;
