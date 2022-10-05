import React, { useState } from "react";
import { ImageGalleryImgStyles } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";
import PropTypes from 'prop-types'

const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => {
  const [showModal, setShowModal] = useState(false);
 
const toggleModal = () => {
  setShowModal(showModal);
};
  
  return (
      <>
        <ImageGalleryImgStyles
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
        ;
        {showModal && (
          <Modal
            image={largeImageURL}
            tags={tags}
            onClose={toggleModal}
          />
        )}
      </>
    )
  };

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;