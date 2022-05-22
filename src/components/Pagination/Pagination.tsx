import React, { useState } from 'react';
import { PaginationProps } from './Pagination.types'
import { PaginationButton, PaginationText } from './Pagination.style'
import { Image } from '../../styles';

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
      <PaginationButton
        onClick={() => {

          handlePagePrev(currentPage, false)
          if (currentPage === currentMaxPage - 2) {
            setCurrentMaxPage(currentMaxPage - maxButtonsToShow)
          }
        }}
        disabled={currentPage === 1}>
        <Image src='public/images/chevron_left.svg' w="10px" h="10px" />
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
      <PaginationButton
        onClick={() => {
          handlePageNext(currentPage, numberOfPages, false)
          if (currentPage === currentMaxPage) {
            setCurrentMaxPage(currentMaxPage + maxButtonsToShow)
          }
        }}
        disabled={currentPage === numberOfPages}
      >
        <Image src='public/images/chevron_right.svg' w="10px" h="10px" />
      </PaginationButton>

    </>
  )
}