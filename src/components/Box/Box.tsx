import { BoxProps } from './Box.types'
import { BoxContainer } from './Box.style'

export const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <BoxContainer>
      {children}
    </BoxContainer>
  );
}