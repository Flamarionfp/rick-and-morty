import { useEffect, useState } from 'react';
import { Flex } from '../../styles/Flex'
import { api } from '../../services/api'
import { CharacterProps } from '../../components/interfaces/character.types'

export const Home: React.FC = () => {
  const [data, setData] = useState<CharacterProps>({} as CharacterProps)

  useEffect(() => {
    async function fetchCharacters() {
      const { status, data } = await api.get('/character')
      if (status === 200) {
        console.log(data)
        setData(data)
      }
    }

    fetchCharacters()
  }, [])

  return (
    <Flex style={{ padding: '30px' }}>
      <h2>Hello World</h2>
    </Flex>
  );
}