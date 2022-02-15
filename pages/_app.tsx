import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-styles';
import theme from '../styles/theme';
import ReadingBook from 'src/component/ReadingBook';
import DiaryBook from 'src/component/DiaryBook';
import Download from 'src/component/Download';
import Footer from 'src/component/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ReadingBook/>
      <DiaryBook/>
      <Download/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
