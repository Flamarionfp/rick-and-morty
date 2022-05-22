import React, { useState } from 'react';
import { PaginationProps } from './Pagination.types'
import { PaginationButton, PaginationText } from './Pagination.style'

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  numberOfPages,
  handlePageClick = () => null,
  handlePagePrev = () => null,
  handlePageNext = () => null,
}) => {
  const [pagesNumber, setPagesNumber] = useState(3)
  const pages = new Array(pagesNumber).fill(null)

  return (
    <>
      <PaginationButton onClick={() => handlePagePrev(currentPage, false)}>
        ...
      </PaginationButton>
      {pages.map((_, index) => {
        const paginationNumber = index + 1
        return (
          <PaginationButton
            onClick={() => handlePageClick(paginationNumber)}
            isActive={paginationNumber === currentPage}
          >
            <PaginationText>{paginationNumber}</PaginationText>
          </PaginationButton>

        )
      })}
      <PaginationButton onClick={() => {
        handlePageNext(currentPage, numberOfPages, false)
        if (currentPage === pagesNumber) {
          setPagesNumber(pagesNumber + 3)
        }
      }}>
        ...
      </PaginationButton>
    </>
  )
}