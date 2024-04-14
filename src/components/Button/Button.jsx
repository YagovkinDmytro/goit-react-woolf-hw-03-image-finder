const Button = ({ addPage }) => {
  return (
    <button type="submit" className="Button" onClick={() => addPage()}>
      Load more
    </button>
  );
};

export default Button;
