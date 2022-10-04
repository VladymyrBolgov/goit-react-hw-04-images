import React, { useState, useEffect } from "react";
import { Notify } from "notiflix";
import { Global } from '@emotion/react'
import { GlobalStyles } from "./GlobalStyles.styled";
import { AppBox } from "./App.styled";

import getImages from '../services/api'
import Loader from "./Loader";
import Button from "./Button";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

const App = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  //--------------------------------
  
  useEffect(() => {
      if (!value) {
        return;
      }
    const findImages = async () => {
      try {
        setIsLoading(true);
        const photos = await getImages(value, page);
        photos.hits.length === 0
          ? Notify.failure(
            'Sorry! There is no photo with this name. Try something else!'
          )
          : setImages(images => [...images, ...photos.hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findImages();
  }, [value, page]);
   
  const addValue = ({ inputValue }) => {
    if (inputValue !== value) {
      setValue(inputValue);
      setImages([]);
      setPage(1);
    } else {
      setValue(inputValue);
    }
  };
    
    return (
      <AppBox>
        <Global styles={GlobalStyles} />
        <Searchbar onSubmit={addValue} />
        {isLoading && images.length === 0 ? (
          <Loader />
        ) : (
          <ImageGallery items={images} />
        )}
        {images.length % 12 === 0 && images.length !== 0 ? (
          <Button onClick={() => setPage(() => page + 1)} />
        ) : (
          ''
        )}
      </AppBox>
    );
  }

  
export default App;