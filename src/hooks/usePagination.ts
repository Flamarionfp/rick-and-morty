import { useState, useCallback } from 'react'

export const usePagination = () => {
  const initalPage = 1
  const [currentPage, setCurrentPage] = useState(initalPage)

  const handlePageClick = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber)
  }, [])

  const handlePagePrev = useCallback((pageNumber: number, prevAll: boolean) => {
    if (prevAll) {
      setCurrentPage(1)
    } else {
      setCurrentPage(pageNumber - 1)
    }
  }, [])

  const handlePageNext = useCallback((pageNumber: number, numberOfPages: number, nextAll: boolean) => {
    if (nextAll) {
      setCurrentPage(numberOfPages)
    } else {
      setCurrentPage(pageNumber + 1)
    }
  }, [])

  return { currentPage, handlePageClick, handlePagePrev, handlePageNext }
}