import { Nav, NavContent, Branding, SearchContainer, Links } from './styles';
import { Container } from '../Container';
import SearchBar from '../SearchBar';
import React from 'react';

export default function UniversalNav({ blend }) {
  const backgroundColor = blend ? '' : 'color-orange-hv';
  return (
    <Nav>
      <Container backgroundColor={backgroundColor}>
        <NavContent blend={blend}>
          <Branding></Branding>

          <SearchContainer>
            <SearchBar />
          </SearchContainer>

          <Links blend={blend}></Links>
        </NavContent>
      </Container>
    </Nav>
  );
}
