import React from 'react';
import styles from './navbar.module.css';
import Head from 'next/head';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BiAtom } from 'react-icons/bi';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <h1>
            <a href="">
              <span>
                <BiAtom className={styles.main_icon} />
              </span>
              <span>Hendrick Samuel</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">
            <FaLinkedin aria-hidden="true" className={styles.icon} />
            <span className="sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="">
            <FaGithubSquare aria-hidden="true" className={styles.icon} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
