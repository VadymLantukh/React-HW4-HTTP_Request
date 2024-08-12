const ImageCard = ({ urls, rel }) => {
  return (
    <div>
      <img src={urls.small} rel={rel} alt="photo" />
    </div>
  );
};

export default ImageCard;
