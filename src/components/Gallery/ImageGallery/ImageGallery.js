import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/Gallery/ImageGalleryItem/ImageGalleryItem';
import { GalleryItem } from './ImageGallery.styled';

const ImageGallery = ({ imgData, showModal, name }) => {
  return (
    <Gallery>
      {imgData.map(item => (
        <GalleryItem key={item.id}>
          <ImageGalleryItem
            onClick={() => showModal(item.largeUrl)}
            src={item.url}
            alt={name}
          />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImageGallery.protoTypes = {
  imgData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  showModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageGallery;
