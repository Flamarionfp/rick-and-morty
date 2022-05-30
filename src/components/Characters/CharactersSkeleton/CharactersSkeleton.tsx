import { Skeleton, Flex } from '../../../styles'
import { CharactersSkeletonContainer, SkeletonVerticalSpacing } from './styles'

export const CharactersSkeleton: React.FC = () => {
  return (
    <CharactersSkeletonContainer>
      <Skeleton />
      <SkeletonVerticalSpacing>
        <Flex justifyContent="center">
          <Skeleton h="20px" w="150px" />
        </Flex>
      </SkeletonVerticalSpacing>
      <Skeleton h="15px" />
      <SkeletonVerticalSpacing>
        <Skeleton h="15px" />
      </SkeletonVerticalSpacing>
      <Skeleton h="15px" />
    </CharactersSkeletonContainer>
  )
}