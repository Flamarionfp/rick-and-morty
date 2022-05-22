import React from 'react';
import { Image } from '../../styles/Image'
import { SearchInput } from '../SearchInput'
import { HeaderProps } from './Header.types';
import { HeaderContainer } from './Header.styles'

export const Header: React.FC<HeaderProps> = ({ isLogoVisible = true, isSearchInputVisible = true }) => {
  return (
    <HeaderContainer>
      {isLogoVisible && (
        <Image
          src="/images/logo.png"
          objectFit="contain"
          w="150px"
          h="50px"
        />
      )}
      {isSearchInputVisible && (
        <SearchInput />
      )}
    </HeaderContainer>
  );
}