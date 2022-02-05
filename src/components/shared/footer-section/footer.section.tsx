import React from 'react';
import styles from './footer.section.module.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const FooterSection: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2>Hendrick Samuel &middot; Developper</h2>
      <ul>
        <li>
          <a href="">
            <FaLinkedin aria-hidden="true" className={styles.icon} />
            <span className="sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HendrickSamuel"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare aria-hidden="true" className={styles.icon} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HendrickSamuel/portfolio-project"
            target="_blank"
            rel="noreferrer"
          >
            <span>Project source code</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2022 Hendrick Samuel. All rights reserved.</small>
      </p>
    </footer>
  );
};
