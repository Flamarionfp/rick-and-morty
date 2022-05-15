import { CharacterProps } from '../../interfaces'
import { CharacterCard } from './CharacterCard'

export const Characters: React.FC<CharacterProps> = ({ results }) => {
  return (
    <>
      {results?.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </>
  )
}