import { GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, onClick, largeUrl }) => {
  return <GalleryImage src={src} alt={alt} onClick={() => onClick(largeUrl)} />;
};

export default ImageGalleryItem;
