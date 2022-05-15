import { CharacterData } from '../../interfaces'
import { Box } from '../Box'
import { Image } from '../../styles/Image'
import { InfoWrapper, TextWrapper, CharacterName, Text } from './Characters.style'
import { getTranslatedSpecie, getTranslatedStatus, getTranslatedGender } from '../../helpers'

export const CharacterCard: React.FC<CharacterData> = ({ image, name, species, status, gender }) => {
  return (
    <Box>
      <InfoWrapper>
        <Image src={image} w="100%" h="100%" />
        <TextWrapper>
          <CharacterName title={name}>{name}</CharacterName>
          <Text title={species}>{`Espécie: ${getTranslatedSpecie(species) ?? species}`}</Text>
          <Text>{`Status: ${getTranslatedStatus(status)}`}</Text>
          <Text>{`Gênero: ${getTranslatedGender(gender)}`}</Text>
        </TextWrapper>
      </InfoWrapper>
    </Box>
  );
}