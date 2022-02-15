import React from 'react';
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
} from 'components';

export default function Home() {
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
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
