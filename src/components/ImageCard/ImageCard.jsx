import css from './ImageCard.module.css'

const ImageCard = ({ urls, rel, description, handleOpenModal }) => {
  return (
    <div>
      <img
        onClick={() => handleOpenModal({ urls: urls.regular })}
        src={urls.small}
        rel={rel}
        alt={description}
        width='360px'
        height='220px'
      />
    </div>
  );
};

export default ImageCard;
