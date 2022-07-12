import { Component } from 'react';
import PropTypes from 'prop-types';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

import fetchImg from 'components/services/services';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './Box';

class App extends Component {
  static propTypes = {
    img: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        largeUrl: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    name: PropTypes.string,
    showModal: PropTypes.bool,
    largeUrl: PropTypes.string,
    currentPage: PropTypes.number,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    totalHits: PropTypes.number,
  };

  state = {
    img: [],
    name: '',
    showModal: false,
    largeUrl: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.fetchImg();
    }
  }

  fetchImg = () => {
    this.setState({
      isLoading: true,
    });

    fetchImg
      .fetchImages(this.state.name, this.state.currentPage)

      .then(({ hits, totalHits }) => {
        const obj = hits.map(item => {
          return {
            id: item.id,
            url: item.webformatURL,
            largeUrl: item.largeImageURL,
          };
        });
        this.setState(prevState => ({
          totalHits: totalHits,
          img: [...prevState.img, ...obj],
          currentPage: prevState.currentPage + 1,
        }));
        console.log(this.state.totalHits);
      })

      .catch(error => {
        this.setState({ error });
        toast.error('Oops ... Something went wrong ... try again');
      })
      .finally(() => {
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
            block: 'end',
          });

          if (
            this.state.img.length > 0 &&
            this.state.img.length === this.state.totalHits
          ) {
            toast.error('no more');
          }
        }
        this.setState({
          isLoading: false,
        });
      });
  };

  onClickImg = url => {
    this.setState({
      largeUrl: url,
      showModal: !this.state.showModal,
    });
  };

  onSearchSubmit = data => {
    this.setState({
      name: data.name,
      currentPage: 1,
      img: [],
    });
  };

  render() {
    const shouldRenderLoadMore =
      this.state.img.length > 10 &&
      this.state.img.length < this.state.totalHits &&
      !this.state.isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {this.state.showModal && (
          <Modal showModal={this.onClickImg}>
            <img src={this.state.largeUrl} alt={this.state.name} />
          </Modal>
        )}
        {this.state.img.length === 0 && (
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            color="blue"
            mt="40px"
          >{`No images for your request ${this.state.name}`}</Box>
        )}
        {this.state.error && (
          <h1>ops ... Something went wrong ... try again</h1>
        )}
        {this.state.name && (
          <ImageGallery
            imgData={this.state.img}
            showModal={this.onClickImg}
            name={this.state.name}
          />
        )}
        <Loader
          isLoading={this.state.isLoading}
          size={'100px'}
          color={'#3f51b5'}
        />
        {shouldRenderLoadMore && <Button onClick={this.fetchImg}></Button>}
        <ToastContainer autoClose={3000} />
        <div id="modalRoot"></div>
      </>
    );
  }
}

export default App;
