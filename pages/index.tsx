import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Main from 'components/Main';
import Intro from 'components/Intro';
import Video from 'components/Video';

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    setText('타입스크립트');
  }, 2000);

  return (
    <div>
      <Head>
        <title>땅콩스쿨</title>
      </Head>
      <Container>
        <Main />
        <Intro />
        <Video />
      </Container>
    </div>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
