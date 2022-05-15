import { useEffect, useState } from 'react';
import { Flex } from '../../styles/Flex'
import { api } from '../../services/api'
import { CharacterProps } from '../../interfaces/character.types'
import { Characters } from '../../components/Characters'
import { CharactersContainer } from '../Home/Home.style'

export const Home: React.FC = () => {
  const [data, setData] = useState<CharacterProps>({} as CharacterProps)

  useEffect(() => {
    async function fetchCharacters() {
      const { status, data } = await api.get('/character')
      if (status === 200) {
        setData(data)
      }
    }

    fetchCharacters()
  }, [])

  return (
    <CharactersContainer>
      <Flex flexWrap='wrap' gap="25px" justifyContent='center'>
        <Characters {...data} />
      </Flex>
    </CharactersContainer>
  );
}