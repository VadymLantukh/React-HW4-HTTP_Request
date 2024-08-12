import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ articles }) => {
  return (
    <ul>
      {articles.map(item => {
        return (
          <li key={item.id}>
            <ImageCard {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
