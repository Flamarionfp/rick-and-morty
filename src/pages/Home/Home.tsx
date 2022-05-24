import React, { useState, useContext } from 'react';
import { Flex } from '../../styles'
import { Header, Characters, Pagination } from '../../components'
import { CharactersContainer, PaginationWrapper, ExpandButton } from '../Home/Home.style'
import { CharactersContext } from '../../contexts/CharactersContext'
import { usePagination } from '../../hooks'
import '../../styles/index.css'

export const Home: React.FC = () => {
  const { data, currentPage, handlePageClick, handlePagePrev, handlePageNext } = useContext(CharactersContext)
  const [isExpanded, setIsExpanded] = useState(false)

  function handleSeeMore() {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <React.Fragment>
      <Header />
      <CharactersContainer maxH={isExpanded ? '100%' : '350px'}>
        <Flex flexWrap='wrap' gap="25px" justifyContent='center'>
          <Characters />
        </Flex>
      </CharactersContainer>
      <PaginationWrapper>
        <ExpandButton onClick={handleSeeMore}>{isExpanded ? 'VER MENOS' : 'VER MAIS'}</ExpandButton>
        <Flex gap="5px">
          <Pagination
            currentPage={currentPage}
            numberOfPages={data?.info?.pages}
            handlePagePrev={handlePagePrev}
            handlePageClick={handlePageClick}
            handlePageNext={handlePageNext}
          />
        </Flex>
      </PaginationWrapper>
    </React.Fragment>
  );
}