import React, { useEffect, useState } from 'react';
import { Flex } from '../../styles'
import { api } from '../../services/api'
import { CharacterProps } from '../../interfaces/character.types'
import { Header, Characters, Pagination } from '../../components'
import { CharactersContainer, PaginationWrapper, ExpandButton } from '../Home/Home.style'
import { usePagination } from '../../hooks';
import '../../styles/index.css'

export const Home: React.FC = () => {
  const [data, setData] = useState<CharacterProps>({} as CharacterProps)
  const [isExpanded, setIsExpanded] = useState(false)
  const { currentPage, handlePageClick, handlePagePrev, handlePageNext } = usePagination()

  const characterEndpoint = `/character${currentPage > 1 ? `/?page=${currentPage}` : ''}`

  useEffect(() => {
    async function fetchCharacters() {
      const { status, data } = await api.get(characterEndpoint)
      if (status === 200) {
        setData(data)
      }
    }

    fetchCharacters()
  }, [currentPage])

  function handleSeeMore() {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <React.Fragment>
      <Header />
      <CharactersContainer maxH={isExpanded ? '100%' : '350px'}>
        <Flex flexWrap='wrap' gap="25px" justifyContent='center'>
          <Characters {...data} />
        </Flex>
      </CharactersContainer>
      <PaginationWrapper>
        <ExpandButton onClick={handleSeeMore}>{isExpanded ? 'VER MENOS' : 'VER MAIS'}</ExpandButton>
        <Flex gap="5px">
          <Pagination
            currentPage={currentPage}
            numberOfPages={data?.info?.pages}
            handlePageClick={handlePageClick}
            handlePagePrev={handlePagePrev}
            handlePageNext={handlePageNext}
          />
        </Flex>
      </PaginationWrapper>
    </React.Fragment>
  );
}