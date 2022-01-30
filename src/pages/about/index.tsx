import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/navbar/navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hendrick Samuel</title>
        <meta
          name="og:description"
          content="portfolio created with nextjs and css"
        />
        <meta name="og:title" content="Hendrick Samuel" />
        <meta property="og:image" content="/images/20220129-IMG_3345.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
