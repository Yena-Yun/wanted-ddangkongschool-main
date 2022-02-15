import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {
  Main,
  Intro,
  Video,
  Checks,
  ReadingBook,
  DiaryBook,
  Books,
  Bookmarks,
  ReviewSlide,
  Download,
  Footer,
  FloatingBtn,
  MouseAnimation,
} from 'components';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  return (
    <>
      <Head>
        <title>땅콩스쿨</title>
      </Head>
      <Container>
        <Main />
        <Intro />
        <Video />
        <Checks />
        <ReadingBook />
        <DiaryBook />
        <Books />
        <Bookmarks />
        <ReviewSlide />
        <Download />
        <Footer />
        <FloatingBtn/>
        <MouseAnimation/>
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
