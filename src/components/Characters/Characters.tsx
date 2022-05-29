import { useContext } from 'react'
import { CharacterCard } from './CharacterCard'
import { CharactersContext } from '../../contexts'


export const Characters: React.FC = () => {
  const { data: { results } } = useContext(CharactersContext)
  return (
    <>
      {results?.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </>
  )
}