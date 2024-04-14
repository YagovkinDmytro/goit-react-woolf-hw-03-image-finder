import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImageApi } from 'api/dataImages';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: '',
    searchValue: '',
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchValue !== prevState.searchValue) {
      this.getSearchImages();
    }
    if (this.state.page !== prevState.page) {
      this.getMoreImages();
    }
  }

  // getSearchImages = async () => {
  //   try {
  //     this.setState({ isLoading: true, error: '' });
  //     const data = await getImageApi(this.state.searchValue, this.state.page);
  //     const { totalHits, hits } = data;
  //     this.setState(prev => ({
  //       images: [...prev.images, ...hits],
  //       loadMore: this.state.page < Math.ceil(totalHits / 12),
  //       isLoading: false,
  //     }));
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  getSearchImages = async () => {
    try {
      const { searchValue, page } = this.state;
      this.setState({
        images: [],
        isLoading: true,
        error: '',
        page: 1,
      });
      const data = await getImageApi(searchValue, page);
      const { hits } = data;
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false, loadMore: true });
    }
  };

  getMoreImages = async () => {
    try {
      const { searchValue, page } = this.state;
      this.setState({ isLoading: true, error: '' });
      const data = await getImageApi(searchValue, page);
      const { totalHits, hits } = data;
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / 12),
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchParam = searchValue => {
    this.setState({ searchValue });
  };

  addPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isLoading, error, searchValue, loadMore, page } =
      this.state;
    console.log(page);
    return (
      <div className="App">
        {isLoading && <Loader></Loader>}
        {error && <h1>{error}</h1>}
        <Searchbar searchParam={this.searchParam} />
        {searchValue && (
          <ImageGallery>
            <ImageGalleryItem imagesArr={images}></ImageGalleryItem>
          </ImageGallery>
        )}
        {loadMore && <Button addPage={this.addPage}></Button>}
      </div>
    );
  }
}
