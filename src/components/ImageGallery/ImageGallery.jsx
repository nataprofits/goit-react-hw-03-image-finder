import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

 const ImageGallery = ({ images }) => {
  return (
    <ImageList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default ImageGallery