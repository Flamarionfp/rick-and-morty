import { PaginationProps } from './Pagination.types'
import { PaginationButton, PaginationText } from './Pagination.style'

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePageClick = () => null
}) => {
  const pages = new Array(10).fill(null)

  return (
    <>
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
    </>
  )
}