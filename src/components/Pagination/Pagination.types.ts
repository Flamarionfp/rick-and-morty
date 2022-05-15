export interface PaginationProps {
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePagePrev: (pageNumber: number, prevAll: boolean) => void;
  handlePageNext: (pageNumber: number, numberOfPages: number, nextAll: boolean) => void;
}

export interface PaginationButtonProps {
  isActive?: boolean;
}