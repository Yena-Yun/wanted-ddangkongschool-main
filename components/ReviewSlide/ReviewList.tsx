import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import slideReview from 'utils/constants/slideReview';
import Image from 'next/image';

const ReviewList = () => {
  const settings = useMemo<Settings>(
    () => ({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }),
    []
  );

  return (
    <SlideWrap>
      <Slider {...settings}>
        {slideReview.map((review) => {
          // console.log(review);
          return (
            <div key={review.id}>
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
              </TitleWrap>
              <Username>{review.username}</Username>
              <Content>
                <span>{review.content}</span>
              </Content>
            </div>
          );
        })}
      </Slider>
    </SlideWrap>
  );
};

const SlideWrap = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  align-items: center;
  width: 100vw;
`;

const TitleWrap = styled.div`
  margin-bottom: 50px;
  /* position: relative; */
`;

const ThumbnailWrap = styled.div`
  /* position: absolute; */
  /* top: 2px; */
  /* left: 68px; */
  width: 126px;
  height: 126px;
  border: 16px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
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

export default ReviewList;
