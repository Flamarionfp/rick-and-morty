import styled from 'styled-components'
import { ImageProps } from './Image.types';

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  object-fit: ${(props) => props.objectFit};
`;