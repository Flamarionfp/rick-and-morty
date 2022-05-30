import React, { useState, useContext } from 'react';
import { Flex } from '../../styles'
import { Header, Characters, Pagination, CharactersSkeleton } from '../../components'
import { CharactersContainer, PaginationWrapper, ExpandButton } from '../Home/Home.style'
import { CharactersContext } from '../../contexts/CharactersContext'
import '../../styles/index.css'


export const Home: React.FC = () => {
  const { isLoading, data, currentPage, handlePageClick, handlePagePrev, handlePageNext } = useContext(CharactersContext)
  const [isExpanded, setIsExpanded] = useState(false)

  function handleSeeMore() {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <React.Fragment>
      <Header />
      <CharactersContainer maxH={isExpanded ? '100%' : '350px'}>
        <Flex flexWrap='wrap' gap="25px" justifyContent='center'>
          {!isLoading ? (
            <Characters />
          ) : (
            new Array(isExpanded ? 20 : 6).fill(null).map((_, index) => (
              <CharactersSkeleton key={index} />
            ))
          )}
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