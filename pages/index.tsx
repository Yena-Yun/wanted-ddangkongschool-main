import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Main, Intro, Video, Checks, SlideOverlay } from 'components';

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
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
