import { Component } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'services/finder-api';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { Loader } from 'components/loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    visible: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevSearch = prevProps.searchParam;
    const nextSearch = this.props.searchParam;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      this.setState({ visible: true });
      const images = await getImages(nextSearch, nextPage);

      if (nextPage === 1) {
        this.setState({ images: images.hits });
      } else {
        this.setState(prevProps => ({
          images: [...prevProps.images, ...images.hits],
        }));
      }
      this.setState({ visible: false });
    }
  };

  openModal = e => {
    this.props.selectBigUrl(e.target.id);
    this.props.showModal();
  };

  render() {
    const { visible, images } = this.state;
    const { onClick } = this.props;

    return (
      <>
        <ul className="ImageGallery" onClick={this.openModal}>
          {visible && <Loader />}
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallUrl={webformatURL}
                bigUrl={largeImageURL}
                alt={tags}
              ></ImageGalleryItem>
            );
          })}
        </ul>
        {images.length > 0 && <Button type="button" onClick={onClick}></Button>}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchParam: PropTypes.string.isRequired,
  page: PropTypes.number,
  selectBigUrl: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  showModal: PropTypes.func,
};
