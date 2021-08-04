import React from 'react';
import { Container } from './styles';
import Searchbar from './components/Searchbar';

const Pokedex = () => {
  return (
    <Container>
      <h1>POKEDEX</h1>
      <Searchbar />
    </Container>
  );
};

export default Pokedex;
