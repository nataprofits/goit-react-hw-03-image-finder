
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getImagesAPI } from '../service/api';
import { normalizeHits } from '../utils/normalizeHits';
import { Button } from '../Button/Button';
import { Wrapper, Error } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  abortCtrl;

  state = {
    images: [],
    query: '',
    currentPage: 1,
    error: null,
    isLoading: false,
    isLastPage: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, currentPage } = this.state;

    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }

    this.abortCtrl = new AbortController();

    try {
      this.setState({ isLoading: true });

      const data = await getImagesAPI(
        query,
        currentPage,
        this.abortCtrl.signal
      );

      if (data.hits.length === 0) {
        return toast.info('Sorry, no images for your query...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (currentPage === 1) {
        toast.info('Wow! We found some images for you!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.success('Wow! We found some more images for you!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      const normalizedHits = normalizeHits(data.hits);

      this.setState(prevState => ({
        images: [...prevState.images, ...normalizedHits],
        isLastPage:
          prevState.images.length + normalizedHits.length >= data.totalHits,
        error: null,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = query => {
    if (this.state.query === query) {
      return;
    }

    this.setState({
      query,
      currentPage: 1,
      images: [],
      error: null,
      isLastPage: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { images, isLoading, error, isLastPage } = this.state;

    return (
      <Wrapper>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.handleSearchSubmit}/>

        {error && <Error>Error: {error}</Error>}

        <ImageGallery images={images}/>

        {isLoading && <Loader />}

        {!isLoading && images.length > 0 && !isLastPage && (
          <Button onClick={this.loadMore} />
        )}
      </Wrapper>
    );
  }
}