import React, { Component } from "react";
import { Notify } from "notiflix";
import { Global } from '@emotion/react'
import { GlobalStyles } from "./GlobalStyles.styled";
import { AppBox } from "./App.styled";

import getImages from '../services/api'
import Loader from "./Loader";
import Button from "./Button";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.value !== this.state.value
    ) {
      this.findImages();
    }
  }

  addValue = ({ inputValue }) => {
    if (inputValue !== this.state.value) {
      this.setState({
        value: inputValue,
        images: [],
        page: 1,
      });
    } else {
      this.setState({
        value: inputValue,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  findImages = async () => {
    try {
      this.setState({ isLoading: true });
      const photos = await getImages(this.state.value, this.state.page);
      photos.hits.length === 0
        ? Notify.failure(
          'Sorry! There is no photo with this name. Try something else!'
        )
        : this.setState(prevState => ({
          images: [...prevState.images, ...photos.hits],
        }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <AppBox>
        <Global styles={GlobalStyles} />
        <Searchbar onSubmit={this.addValue} />
        {isLoading && images.length === 0 ? (
          <Loader />
        ) : (
          <ImageGallery items={images} />
        )}
        {images.length % 2 === 0 && images.length !== 0 ? (
          <Button onClick={this.loadMore} />
        ) : (
          ''
        )}
      </AppBox>
    );
  }
}
  
export default App;