import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ hits }) => (
  <ul className={styles.ImageGallery}>
    {hits.map(hit => (
      <li key={hit.id} className={styles.ImageGalleryItem}>
        <ImageGalleryItem hit={hit} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
