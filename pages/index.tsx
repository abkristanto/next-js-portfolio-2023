import Clients from '@/components/Clients';
import Header from '@/components/Header';
import LatestWork from '@/components/LatestWork';
import Logos from '@/components/Logos';
import Skills from '@/components/Skills';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='container mx-auto px-6'>
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
      <Logos />
      <Skills />
      <LatestWork />
      <Clients />
    </div>
  );
}
