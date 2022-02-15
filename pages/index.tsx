import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Main from 'components/Main';
import Intro from 'components/Intro';
import Video from 'components/Video';
import Checks from 'components/Checks';
import ReadingBook from 'src/component/ReadingBook';
import DiaryBook from 'src/component/DiaryBook';
import Download from 'src/component/Download';
import Footer from 'src/component/Footer';

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
        <Checks />
        <ReadingBook/>
        <DiaryBook/>
        <Download/>
        <Footer/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
