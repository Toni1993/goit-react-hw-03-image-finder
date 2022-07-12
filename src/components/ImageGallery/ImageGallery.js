import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imgData, showModal, name }) => {
  return (
    <ul className={s.gallery}>
      {imgData.map(item => (
        <li className={s.ImageGalleryItem} key={item.id}>
          <ImageGalleryItem
            onClick={() => showModal(item.largeUrl)}
            src={item.url}
            alt={name}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.protoTypes = {
  imgData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  showModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageGallery;
