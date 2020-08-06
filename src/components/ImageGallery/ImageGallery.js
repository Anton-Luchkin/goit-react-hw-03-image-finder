import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ hits, onClickImage }) => (
  <ul className={styles.ImageGallery}>
    {hits.map(hit => (
      <li key={hit.id} className={styles.ImageGalleryItem}>
        <ImageGalleryItem
          hit={hit}
          onSetLargeImg={() => onClickImage(hit.largeImageURL)}
        />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
