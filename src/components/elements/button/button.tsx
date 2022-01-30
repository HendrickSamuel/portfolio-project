import React, { Children } from 'react';
import styles from './button.module.css';

interface props {
  children: JSX.Element;
}

export const Button: React.FC<props> = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};
