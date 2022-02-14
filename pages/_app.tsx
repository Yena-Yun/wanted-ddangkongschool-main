import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-styles';
import theme from '../styles/theme';
import Style5 from 'src/component/Style5';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Style5/>
    </ThemeProvider>
  );
}

export default App;
