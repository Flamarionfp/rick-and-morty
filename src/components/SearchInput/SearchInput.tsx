import React, { useContext } from 'react';
import { Input } from './SearchInput.styles'
import { CharactersContext } from '../../contexts'

export const SearchInput: React.FC = () => {
  const { searchedTerm, updateSearchedTerm = () => null } = useContext(CharactersContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchedTerm(e.target.value)
  }

  return (
    <Input
      onChange={handleChange}
      value={searchedTerm}
      placeholder="Pesquise por algum personagem"
    />
  )
}