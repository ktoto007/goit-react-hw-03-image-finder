import propTypes from 'prop-types';

export const ImageGalleryItem = ({ bigUrl, smallUrl, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={smallUrl} alt={alt} id={bigUrl} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  bigUrl: propTypes.string.isRequired,
  smallUrl: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
