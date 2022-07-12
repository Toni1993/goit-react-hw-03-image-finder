import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './Modal.styled';
import { ModalVisible } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalVisible>{this.props.children}</ModalVisible>
      </ModalOverlay>,
      document.getElementById('modalRoot')
    );
  }
}

export default Modal;
