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
  const maxButtonsToShow = 3
  const [currentMaxPage, setCurrentMaxPage] = useState(maxButtonsToShow)
  const pages = new Array(currentMaxPage).fill(null)

  return (
    <>
      <PaginationButton onClick={() => handlePagePrev(currentPage, false)}>
        ...
      </PaginationButton>
      {pages.map((_, index) => {
        const paginationNumber = index + 1
        return (
          <>
            {paginationNumber > currentMaxPage - maxButtonsToShow && (
              <PaginationButton
                onClick={() => handlePageClick(paginationNumber)}
                isActive={paginationNumber === currentPage}
              >
                <PaginationText>{paginationNumber}</PaginationText>
              </PaginationButton>
            )}
          </>
        )
      })}
      <PaginationButton onClick={() => {
        handlePageNext(currentPage, numberOfPages, false)
        if (currentPage === currentMaxPage) {
          setCurrentMaxPage(currentMaxPage + maxButtonsToShow)
        }
      }}>
        ...
      </PaginationButton>
    </>
  )
}