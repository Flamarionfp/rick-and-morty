import styled from 'styled-components'
import { FlexProps } from './Flex.types';

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex: ${(props) => props.flex};
  direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap ?? 'no-wrap'};
  gap: ${(props) => props.gap};
`;