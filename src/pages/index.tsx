import type { NextPage } from 'next';
import Head from 'next/head';
import { FooterSection } from '../components/shared/footer-section/footer.section';
import {
  IntroSection,
  FeaturedProjects,
  ContactSection,
} from '../components/sections';
import { Navbar } from '../components/shared/navbar/navbar';
import { Separator } from '../components/shared/separator/separator';

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
      <IntroSection />
      <Separator />
      <FeaturedProjects />
      <Separator />
      <ContactSection />
      <Separator />
      <FooterSection />
    </div>
  );
};

export default Home;
