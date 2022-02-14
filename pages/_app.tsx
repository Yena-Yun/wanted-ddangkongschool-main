import { AppProps } from 'next/app';
import Style5 from 'src/component/Style5';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Component {...pageProps} />
    <Style5/>
    </>
  )
}

export default App;
