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
    isLoading: false,
    error: '',
    searchValue: '',
  };

  componentDidMount() {
    // this.getSearchImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchValue !== prevState.searchValue
    ) {
      this.getSearchImages();
    }
  }

  getSearchImages = async () => {
    try {
      this.setState({ isLoading: true, error: '' });
      const data = await getImageApi(this.state.searchValue);
      this.setState({
        images: data.hits,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchParam = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { images, isLoading, error, searchValue } = this.state;

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
        <Button></Button>
      </div>
    );
  }
}
