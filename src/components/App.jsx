import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Modal } from './modal/Modal';
export class App extends Component {
  state = {
    searchParam: '',
    page: 1,
    selectedLinc: '',
    showModal: false,
  };

  handleSearchParam = param => {
    this.setState({ searchParam: param, page: 1 });
  };

  handlePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleLink = url => {
    this.setState({ selectedLinc: url });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { handleSearchParam, handleLink, handlePage, toggleModal } = this;
    const { searchParam, page, showModal, selectedLinc } = this.state;
    return (
      <>
        <Searchbar onSubmit={handleSearchParam}></Searchbar>
        <ImageGallery
          searchParam={searchParam}
          page={page}
          selectBigUrl={handleLink}
          onClick={handlePage}
          showModal={toggleModal}
        ></ImageGallery>
        {showModal && (
          <Modal bigUrl={selectedLinc} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
