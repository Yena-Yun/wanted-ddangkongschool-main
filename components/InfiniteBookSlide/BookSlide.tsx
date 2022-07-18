import styled from 'styled-components';
import Image from 'next/image';
import { Slide } from './Slide';
import { INFINITE_SLIDE_BOOK_NUMBER } from 'utils/constants';

export const BookSlide = () => {
  return (
    <Slide cssEase="linear">
      {Array.from({ length: INFINITE_SLIDE_BOOK_NUMBER }).map((book, idx) => (
        <ImageBox key={idx}>
          <Image
            src={`/images/infiniteSlideBooks/book${idx + 1}.png`}
            alt={`infinite_slide_book${idx + 1}`}
            width={102}
            height={135}
          />
        </ImageBox>
      ))}
    </Slide>
  );
};

const ImageBox = styled.div`
  background-position: center;
  background-size: cover;
  margin-left: 15px;
  display: inline-block;

  @media screen and (min-width: 1200px) {
    margin-left: 50px;
    height: 250px;
    width: 188px !important;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-left: 50px;
    height: 250px;
    width: 188px !important;
  }
`;
