import React from 'react';
import styles from './contact.section.module.css';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact me</h2>
      <p>
        I&#39;m always interested in hearing about new job opportunities,
        learning from communities and expanding my contact list
      </p>
      <p>
        <a href="" className="button">
          Email me
        </a>
      </p>
    </section>
  );
};
