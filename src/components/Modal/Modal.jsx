import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Overlay, ModalWindow, ModalImage} from './Modal.styled'

class Modal extends Component {
   static propTypes = {
      onClose: PropTypes.func.isRequired,
   };

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
   
   handleBackdropClick = event => {
      if (event.currentTarget === event.target) {
        this.props.onClose();
      }
    };

   render() {
      const { image, tags } = this.props;
      return (
         <Overlay onClick={this.handleBackdropClick}>
            <ModalWindow>
               <ModalImage src={image} alt={tags} />
            </ModalWindow>
         </Overlay>
      )
   }
}

export default Modal;