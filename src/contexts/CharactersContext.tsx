import { createContext, useState, useEffect } from 'react'
import { usePagination } from '../hooks/usePagination'
import { api } from '../services/api'
import { CharacterProps } from '../interfaces/character.types'
import { getQueryParams } from '../helpers'

interface CharacterContextProps {
  data: CharacterProps
  currentPage: number,
  searchedTerm: string,
  handlePageClick: (page: number) => void,
  handlePagePrev: (pageNumber: number, prevAll: boolean) => void,
  handlePageNext: (pageNumber: number, numberOfPages: number, nextAll: boolean) => void,
  updateSearchedTerm: (value: string) => void
}

export const CharactersContext = createContext<CharacterContextProps>({
  data: {} as CharacterProps,
  currentPage: 0,
  searchedTerm: "",
  handlePageClick: () => null,
  handlePagePrev: () => null,
  handlePageNext: () => null,
  updateSearchedTerm: () => null
})

export const CharactersContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPage, handlePageClick, handlePagePrev, handlePageNext } = usePagination()
  const [characters, setCharacters] = useState<CharacterProps>({} as CharacterProps)
  const [searchedTerm, setSearchedTerm] = useState('')

  const params = {
    name: searchedTerm.length > 3 ? searchedTerm : ""
  }

  const characterEndpoint = `/character?${getQueryParams(params)}`

  const updateSearchedTerm = (value: string) => {
    setSearchedTerm(value)
  }

  useEffect(() => {
    async function fetchCharacters() {
      const { status, data } = await api.get(characterEndpoint)
      if (status === 200) {
        setCharacters(data)
      }
    }

    fetchCharacters()
  }, [currentPage, searchedTerm])

  const contextData = {
    data: characters,
    currentPage,
    searchedTerm,
    handlePageClick,
    handlePagePrev,
    handlePageNext,
    updateSearchedTerm
  }

  return (
    <CharactersContext.Provider value={contextData}>
      {children}
    </CharactersContext.Provider>
  )
}