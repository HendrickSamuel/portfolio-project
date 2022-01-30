import type { NextPage } from 'next';
import Head from 'next/head';
import { ContactSection } from '../components/contact-section/contact.section';
import { FeaturedProjects } from '../components/featured-projects/featured-projects';
import { FooterSection } from '../components/footer-section/footer.section';
import { IntroSection } from '../components/intro-section/intro.section';
import Navbar from '../components/navbar/navbar';
import { Separator } from '../components/separator/separator';

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
