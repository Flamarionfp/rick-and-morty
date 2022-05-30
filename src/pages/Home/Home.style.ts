import styled from 'styled-components'

interface CharactersContainer {
  maxH?: string;
}

export const CharactersContainer = styled.div<CharactersContainer>`
  max-height: ${(props) => props.maxH};
  overflow-y: hidden;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 7%;
`;

export const ExpandButton = styled.button`
  cursor: pointer;
  border-radius: 50px;
  padding: 15px;
  background-color: #eee;
  min-width: 150px;
  font-weight: bold;
  box-shadow: 1px 1px 1px 1px #00000010;
`;