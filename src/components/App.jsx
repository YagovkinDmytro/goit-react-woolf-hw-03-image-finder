import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImageApi } from 'api/dataImages';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = { images: [] };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    const data = await getImageApi();
    this.setState({ images: data.hits });
  };

  render() {
    console.log(this.state.images);
    return (
      <div className="container">
        <Searchbar></Searchbar>
      </div>
    );
  }
}
