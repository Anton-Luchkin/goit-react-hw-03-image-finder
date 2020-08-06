import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ hit, onSetLargeImg }) => (
  <img
    src={hit.webformatURL}
    alt={hit.tags}
    className={styles.ImageGalleryItem_image}
    onClick={onSetLargeImg}
  />
);

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onSetLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
