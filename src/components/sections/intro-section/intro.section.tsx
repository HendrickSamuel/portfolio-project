import React from 'react';
import styles from './intro.section.module.css';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className={styles.intro}>
      <p className={styles.name}>
        Hi, my name is <span>Hendrick Samuel.</span>
      </p>

      <h2>I create the front end and back end of websites.</h2>

      <p>
        I&#39;m a junior developper specializing in &nbsp;
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          NextJs
        </a>
        , &nbsp;
        <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
          React Native
        </a>
        , &nbsp;
        <a
          href="https://dotnet.microsoft.com/en-us/apps/aspnet"
          target="_blank"
          rel="noreferrer"
        >
          Asp.Net
        </a>
        &nbsp;and SQL.
      </p>

      <p>
        Currently, I&#39;m working at&nbsp;
        <a href="https://www.certinergie.be/?gclid=CjwKCAiAlrSPBhBaEiwAuLSDUO0itATAbEdOmfPlGJq37zYSrt4eCboTMqIIQo3D1mp7OELrwG4kRBoCy4wQAvD_BwE">
          Certinergie
        </a>
        &nbsp;as a full stack developper to create internaly used tools.
      </p>
    </section>
  );
};
