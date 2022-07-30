import styled from 'styled-components';
import Layout from './Layout';

const ReadingBook = () => {
  return (
    <Layout
      title="실시간 방송 형태로 제공되는 신개념 책 읽기"
      animation="fade-up"
    >
      <ImgBox>
        <DeskTopImg src="/images/readingBook/desktop.png" alt="desktop" />
        <MobileImg src="/images/readingBook/mobile.png" alt="mobile" />
      </ImgBox>
    </Layout>
  );
};

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 97px;

  @media screen and (max-width: 768px) {
    /* margin-bottom: 83px; */
  }
`;

const DeskTopImg = styled.img`
  flex-direction: row;
  position: relative;
  left: -10px;
  width: 323px;
  height: 277px;

  @media screen and (min-width: 1200px) {
    left: -78px;
    width: 1124px;
    height: 885px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    left: -78px;
    width: 658px;
    height: 548px;
  }
`;

const MobileImg = styled.img`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 77px;
    left: 554px;
    width: 823px;
    height: 851px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    position: absolute;
    width: 505px;
    height: 527px;
    top: 47px;
    left: 305px;
  }
`;

export default ReadingBook;
