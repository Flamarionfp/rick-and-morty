export interface PaginationProps {
  prev?: string;
  next: string;
  pages: number
  currentPage: number;
  handlePageClick: (page: number) => void;
}

export interface PaginationButtonProps {
  isActive: boolean;
}