import { createContext, useState, useEffect } from 'react'
import { usePagination } from '../hooks/usePagination'
import { api } from '../services/api'
import { CharacterProps } from '../interfaces/character.types'

interface CharacterContextProps {
  data: CharacterProps
  currentPage: number,
  handlePageClick: (page: number) => void,
  handlePagePrev: (pageNumber: number, prevAll: boolean) => void,
  handlePageNext: (pageNumber: number, numberOfPages: number, nextAll: boolean) => void
}

export const CharactersContext = createContext<CharacterContextProps>({
  data: {} as CharacterProps,
  currentPage: 0,
  handlePageClick: () => null,
  handlePagePrev: () => null,
  handlePageNext: () => null
})

export const CharactersContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPage, handlePageClick, handlePagePrev, handlePageNext } = usePagination()
  const [characters, setCharacters] = useState<CharacterProps>({} as CharacterProps)

  const characterEndpoint = `/character${currentPage > 1 ? `/?page=${currentPage}` : ''}`

  useEffect(() => {
    async function fetchCharacters() {
      const { status, data } = await api.get(characterEndpoint)
      if (status === 200) {
        setCharacters(data)
      }
    }

    fetchCharacters()
  }, [currentPage])

  const contextData = {
    data: characters,
    currentPage,
    handlePageClick,
    handlePagePrev,
    handlePageNext
  }

  return (
    <CharactersContext.Provider value={contextData}>
      {children}
    </CharactersContext.Provider>
  )
}