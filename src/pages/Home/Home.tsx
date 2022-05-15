import { useEffect, useState } from 'react';
import { Flex } from '../../styles'
import { api } from '../../services/api'
import { CharacterProps } from '../../interfaces/character.types'
import { Characters, Pagination } from '../../components'
import { CharactersContainer, PaginationWrapper, ExpandButton } from '../Home/Home.style'
import '../../styles/index.css'

export const Home: React.FC = () => {
  const [data, setData] = useState<CharacterProps>({} as CharacterProps)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const characterEndpoint = `/character${currentPage > 1 ? `/?page=${currentPage}` : ''}`

  useEffect(() => {
    async function fetchCharacters() {
      const { status, data } = await api.get(characterEndpoint)
      if (status === 200) {
        setData(data)
        console.log("data", data)
      }
    }

    fetchCharacters()
  }, [currentPage])

  function handleSeeMore() {
    setIsExpanded(prevState => !prevState)
  }

  function handlePageClick(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <CharactersContainer maxH={isExpanded ? '100%' : '350px'}>
        <Flex flexWrap='wrap' gap="25px" justifyContent='center'>
          <Characters {...data} />
        </Flex>
      </CharactersContainer>
      <PaginationWrapper>
        <ExpandButton onClick={handleSeeMore}>{isExpanded ? 'VER MENOS' : 'VER MAIS'}</ExpandButton>
        <Flex gap="5px">
          <Pagination handlePageClick={handlePageClick} currentPage={currentPage} pages={data.pages} prev={data.prev} next={data.next} />
        </Flex>
      </PaginationWrapper>
    </>
  );
}