import styled from 'styled-components'
import { PaginationButtonProps } from './Pagination.types';

export const PaginationButton = styled.div<PaginationButtonProps>`
  cursor: pointer;
  padding: 10px;
  background-color: blue;
  border-radius: 4px;
  min-width: 50px;
  background-color: ${(props) => props.isActive ? '#c32f2f' : '#fff'};
  background-image: url("/images/chevron.svg");
`;

export const PaginationText = styled.p`
  font-weight: bold;
  text-align: center;
`;