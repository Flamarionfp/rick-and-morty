import styled, { keyframes } from 'styled-components'
import { SkeletonProps } from './Skeleton.types'


const skeletonTransition = keyframes`
  to {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  }
`

export const Skeleton = styled.div<SkeletonProps>`
  width: ${(props) => props.w || '200px'};
  height: ${(props) => props.h || '200px'};;
  display: block;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: ${skeletonTransition} 1s infinite;
`;