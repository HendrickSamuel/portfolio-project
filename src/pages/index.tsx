import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IntroSection } from '../components/intro-section/intro.section';
import Navbar from '../components/navbar/navbar';
import { Separator } from '../components/separator/separator';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hendrick Samuel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />$
      </Head>
      <Navbar />
      <IntroSection />
      <Separator />
    </div>
  );
};

export default Home;
