import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface sliderProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  speed?: number;
  infinite?: boolean;
  cssEase?: string;
  autoplaySpeed?: number;
}

const ReviewCarousel = ({ children, autoplay = true }: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      cssEase: 'linear',
      infinite: true,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: 3000,
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
  height: 550px;
`;

const StyledSlider = styled(Slider)`
  padding: 0 40px;
`;

export default ReviewCarousel;
