const ImageGalleryItem = ({ imagesArr }) => {
  console.log(imagesArr);
  return imagesArr.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li className="ImageGalleryItem" key={id}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  ));
};

export default ImageGalleryItem;
