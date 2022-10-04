import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import {Overlay, ModalWindow, ModalImage} from './Modal.styled'

const Modal = ({image, tags,  onClose}) =>  {
   useEffect(() => {
     const handleKeyDown = e => {
         if (e.code === 'Escape') {
           onClose();
         }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      }
   }, [onClose]) 
 
  const handleBackdropClick = event => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    };

      return (
         <Overlay onClick={handleBackdropClick}>
            <ModalWindow>
               <ModalImage src={image} alt={tags} />
            </ModalWindow>
         </Overlay>
      );
   };

Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
   image: PropTypes.string.isRequired,
   tags: PropTypes.string.isRequired,
};

export default Modal;