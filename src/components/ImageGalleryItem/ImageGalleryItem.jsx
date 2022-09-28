import React, { Component } from "react";
import { ImageGalleryImgStyles } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <>
        <ImageGalleryImgStyles
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        ;
        {this.state.showModal && (
          <Modal
            image={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    )
  }
}

export default ImageGalleryItem;