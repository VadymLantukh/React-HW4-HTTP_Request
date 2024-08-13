const ImageCard = ({ urls, rel,description, handleOpenModal }) => {
  return (
    <div>
      <img
        onClick={() => handleOpenModal({ urls: urls.regular })}
        src={urls.small}
        rel={rel}
        alt={description}
      />
    </div>
  );
};

export default ImageCard;
