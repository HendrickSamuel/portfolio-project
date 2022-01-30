import React from 'react';
import styles from './navbar.module.css';
import Head from 'next/head';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BiAtom } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.nav}>
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
            <Link href="/">
              <a className={router.asPath === '/' ? styles.active : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a
                className={router.asPath === '/#projects' ? styles.active : ''}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.asPath === '/about' ? styles.active : ''}>
                About
              </a>
            </Link>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
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
            <a href="" className={styles.button}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
