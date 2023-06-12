import { Component } from 'react';
import { BtnLoadMore } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { MagnifyingGlass } from 'react-loader-spinner';
import { getImages } from '../service/api';
import css from '../../../src/styles.css';
import Searchbar from 'components/Searchbar/Searchbar';

export class App extends Component {
  abortCtrl;
  state = {
    listName: '',
    list: [],
    isLoading: false,
    error: null,
    page: 1,
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    const { listName, page } = this.state;
    if (prevState.listName !== this.state.listName) {
      this.abortCtrl = new AbortController();
      try {
        this.setState({ isLoading: true, error: null });
        const images = await getImages(listName, page, {
          signal: this.abortCtrl.signal,
        });
        if (images.hits.length) {
          this.setState({ list: images.hits, totalHits: images.totalHits });
        } else {
          this.setState({
            error: `No images found for "${listName}"!`,
          });
        }
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleBtnMoreClick = async () => {
    const { listName, page } = this.state;
    this.abortCtrl = new AbortController();
    try {
      this.setState({
        isLoading: true,
        error: null,
      });
      const images = await getImages(listName, page + 1, {
        signal: this.abortCtrl.signal,
      });
      this.setState(prevState => ({
        list: [...prevState.list, ...images.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleListNameSubmit = listName => {
    this.setState({ listName, list: [], page: 1 });
  };

  render() {
    const { list, isLoading, error, totalHits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleListNameSubmit} />
        {error && <h1 className={css.error}>{error}</h1>}
        {isLoading && (
          <div>
            <MagnifyingGlass height="80" width="80" />
          </div>
        )}
        <ImageGallery list={list} />
        {!isLoading && totalHits > 12 && !error && (
          <BtnLoadMore onClick={this.handleBtnMoreClick} />
        )}
      </div>
    );
  }
}
