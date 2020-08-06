import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ hit }) => (
  <img
    src={hit.webformatURL}
    alt="#"
    className={styles.ImageGalleryItem_image}
  />
);

export default ImageGalleryItem;
