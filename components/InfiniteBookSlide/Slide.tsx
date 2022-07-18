import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface slideProps {
  children: React.ReactNode;
  className?: string; // 커스텀 클래스
  autoplay?: boolean | number; // 자동재생 여부
  speed?: number; // 슬라이드 속도
  infinite?: boolean; // 무한 반복 여부
  cssEase?: string; // 부드럽게
  autoplaySpeed?: number; // 자동재생 속도
}

export const Slide = ({
  children,
  className,
  autoplay = true,
  speed = 1800,
}: slideProps) => {
  const settings = useMemo<Settings>(
    () => ({
      cssEase: 'linear',
      infinite: true,
      speed: speed,
      slidesToShow: 14,
      autoplay: Boolean(autoplay),
      autoplaySpeed: 0,
    }),
    [autoplay, speed]
  );

  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.div`
  height: 250px;
  width: 1755px;

  @media screen and (min-width: 1200px) {
    height: 250px;
    width: 3570px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 250px;
    width: 3570px;
  }
`;
