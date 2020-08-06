import React from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imgApi from './Api/imgApi';
import Loader from 'react-loader-spinner';
import Button from './components/Button/Button';
import styles from './Loader.module.css';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imgApi
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollGallery = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  activeImage = largeImageURL => {
    this.setState({ largeImage: largeImageURL });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, isLoading, error, showModal, largeImage } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    return (
      <Container>
        {error && <h1>Ошибка!!!</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery hits={hits} onClickImage={this.activeImage} />

        {isLoading && (
          <Loader
            className={styles.loader}
            type="Audio"
            color="#303f9f"
            timeout={3000}
          />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="#" />
          </Modal>
        )}

        {shouldRenderLoadMoreButton && (
          <Button onClick={this.fetchImages} onScroll={this.scrollGallery()} />
        )}
      </Container>
    );
  }
}

export default App;
