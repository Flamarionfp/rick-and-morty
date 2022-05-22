import { useState, useCallback } from 'react'

export const usePagination = () => {
  const initalPage = 1
  const [currentPage, setCurrentPage] = useState(initalPage)

  const handlePageClick = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber)
  }, [])

  const handlePagePrev = useCallback((pageNumber: number, prevAll: boolean = false) => {
    if (currentPage >= 1) {
      setCurrentPage(prevAll ? initalPage : pageNumber - 1)
      console.log(`é maior ou igual que 1, página atual: ${currentPage}`)
    }
  }, [])

  const handlePageNext = useCallback((pageNumber: number, numberOfPages: number, nextAll: boolean = false) => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(nextAll ? numberOfPages : pageNumber + 1)
    }
  }, [])

  return { currentPage, handlePageClick, handlePagePrev, handlePageNext }
}