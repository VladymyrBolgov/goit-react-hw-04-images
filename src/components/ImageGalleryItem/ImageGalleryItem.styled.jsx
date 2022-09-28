import styled from '@emotion/styled';

export const ImageGalleryImgStyles = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
  transform: scale(1.03);
  cursor: zoom-in;
  }`;