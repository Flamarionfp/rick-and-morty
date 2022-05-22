import React, { useState } from 'react';
import { Input } from './SearchInput.styles'

export const SearchInput: React.FC = () => {
  const [searchedTerm, setSearchedTerm] = useState('')

  const handleChange = () => {
    setSearchedTerm(searchedTerm)
  }

  return (
    <Input
      onChange={handleChange}
      value={searchedTerm}
      placeholder="Pesquise por algum personagem"
    />
  )
}