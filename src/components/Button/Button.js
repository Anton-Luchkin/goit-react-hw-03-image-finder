import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, onScroll }) => (
  <button
    type="button"
    onClick={onClick}
    onScroll={onScroll}
    className={styles.Button}
  >
    Показать ещё
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
