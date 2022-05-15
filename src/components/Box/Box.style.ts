import styled from 'styled-components'

interface BoxProps {
  cursor?: 'default' | 'pointer';
}

export const BoxContainer = styled.div<BoxProps>`
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  cursor: ${(props) => props.cursor || 'default'};
`;