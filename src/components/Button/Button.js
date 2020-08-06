import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, scroll }) => (
  <button
    type="button"
    onClick={onClick}
    scroll={scroll}
    className={styles.Button}
  >
    Показать ещё
  </button>
);

export default Button;
