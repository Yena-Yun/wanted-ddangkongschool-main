import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

interface sliderProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  speed?: number;
  infinite?: boolean;
  cssEase?: string;
  autoplaySpeed?: number;
  arrows?: boolean;
}

const ReviewThumbnailCarousel = ({
  children,
  autoplay = true,
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      cssEase: 'linear',
      infinite: true,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: 3000,
      arrows: false,
    }),
    [autoplay]
  );

  return (
    <SlideWrapper>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.div`
  width: 80vw;
`;

const StyledSlider = styled(Slider)`
  width: 97px;
  height: 97px;
  border-radius: 50%;
`;

export default ReviewThumbnailCarousel;
