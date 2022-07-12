import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick, largeUrl }) => {
  return (
    <img
      className={s.ImageGalleryItemImage}
      src={src}
      alt={alt}
      onClick={() => onClick(largeUrl)}
    />
  );
};

export default ImageGalleryItem;
