import '../globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/common/index';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-epilogue'>
      <Head>
        <title>Abraham Kristanto Portfolio 2023</title>
        <meta
          name='description'
          content='Abraham Kristanto Portfolio Home Page'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
