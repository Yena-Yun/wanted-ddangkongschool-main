import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Main, Intro, Video, Checks, SlideOverlay } from 'components';
import ReadingBook from 'src/component/ReadingBook';
import DiaryBook from 'src/component/DiaryBook';
import Download from 'src/component/Download';
import Footer from 'src/component/Footer';

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
        <SlideOverlay />
        <ReadingBook/>
        <DiaryBook/>
        <Download/>
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
