import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  infinite?: boolean;
  // 부드럽게
  cssEase: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplaySpeed?: number,
}

export default function BooksCarousel({
  children,
  className,
  autoplay = true,
  speed = 1800,
  infinite,
  cssEase,
  autoplaySpeed,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      cssEase: "linear",
      infinite: true,
      speed: speed,
      slidesToShow: 14,
      autoplay: Boolean(autoplay),
      autoplaySpeed: 0,
    }),
    [autoplay, infinite, speed, cssEase, autoplaySpeed],
  );
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}

const SlideWrapper = styled.div`
  height: 250px;
  width: 1755px;

  @media screen and (min-width: 1200px){
    height: 250px;
    width: 3570px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 250px;
    width: 3570px;
  }
`