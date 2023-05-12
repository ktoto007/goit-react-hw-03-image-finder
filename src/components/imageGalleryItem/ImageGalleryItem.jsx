import propTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ bigUrl, smallUrl, alt }) => {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImage src={smallUrl} alt={alt} id={bigUrl} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  bigUrl: propTypes.string.isRequired,
  smallUrl: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
