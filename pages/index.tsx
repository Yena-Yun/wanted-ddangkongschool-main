import { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import * as C from 'components';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>땅콩스쿨</title>
      </Head>
      <Container>
        <C.Main />
        <C.Intro />
        <C.Video />
        <C.Checks />
        <C.ReadingBook />
        <C.DiaryBook />
        <C.InfiniteBookSlide />
        <C.Bookmarks />
        <C.ReviewSlide />
        <C.Download />
        <C.Footer />
        <C.FloatingBtn />
        <C.MouseAnimation />
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexColumn};
`;
