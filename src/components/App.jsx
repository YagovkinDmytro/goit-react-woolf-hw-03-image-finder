import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImageApi } from 'api/dataImages';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    // this.getImages();
  }

  getImages = async searchValue => {
    const data = await getImageApi(searchValue);
    console.log(data);
    this.setState({ images: data.hits });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar handleSubmit={this.getImages} />
        <ImageGallery>
          <ImageGalleryItem imagesArr={images}></ImageGalleryItem>
        </ImageGallery>
      </div>
    );
  }
}
