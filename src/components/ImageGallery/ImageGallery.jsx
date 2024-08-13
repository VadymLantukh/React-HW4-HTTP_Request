import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ articles, handleOpenModal }) => {
  return (
    <ul>
      {articles.map(item => {
        return (
          <li key={item.id}>
            <ImageCard {...item} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
