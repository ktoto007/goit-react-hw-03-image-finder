import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyles } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdrop = e => {
    if (e.targret === e.currentTarge) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyles>
          <img src={this.props.bigUrl} alt="" />
        </ModalStyles>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  bigUrl: PropTypes.string,
};
