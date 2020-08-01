import 'antd/dist/antd.css';
import '../styles/globals.css'
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App
