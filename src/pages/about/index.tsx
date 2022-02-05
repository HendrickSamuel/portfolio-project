import { NextPage } from 'next';
import Head from 'next/head';
import { AboutSection } from '../../components/sections/about-section/about-section';
import { SkillsSection } from '../../components/sections/skills-section/skills-section';
import Navbar from '../../components/shared/navbar/navbar';
import { Separator } from '../../components/shared/separator/separator';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hendrick Samuel</title>
        <meta name="og:description" content="More about me" />
        <meta name="og:title" content="Hendrick Samuel" />
        <meta property="og:image" content="/images/DSCF8500-4-1.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutSection />
      <Separator />
      <SkillsSection />
      <Separator />
    </div>
  );
};

export default Home;
