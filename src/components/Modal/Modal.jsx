const Modal = ({ largeImageURL, tags, handleSetCloseModal }) => {
  const handleClick = evt => {
    if (evt.target.className === 'Overlay') {
      handleSetCloseModal();
    }
  };
  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
