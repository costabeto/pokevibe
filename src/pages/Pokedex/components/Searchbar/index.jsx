import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Input,
  Results,
  ResultItem,
  ResultCount,
  Header,
} from './styles';
import pokeapi from '../../../../services/pokeapi';

import { useHistory } from 'react-router-dom';

const Searchbar = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');

  const history = useHistory();

  const fetchPokemons = useCallback(() => {
    const localPokemons = localStorage.getItem('@pokevibe-pokemon-list');

    if (!!localPokemons) {
      const parsed = JSON.parse(localPokemons);
      setPokemonList(parsed);
    } else {
      pokeapi
        .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000')
        .then((response) => {
          setPokemonList(response.data);
          localStorage.setItem(
            '@pokevibe-pokemon-list',
            JSON.stringify(response.data)
          );
        });
    }
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  function filterBySearch(list) {
    if (!list) return [];
    const { results } = list;
    if (!results) return [];
    return results.filter((p) => search && p.name.includes(search));
  }

  function onSelect(name) {
    history.push(`/pokemon/${name}`);
  }

  return (
    <Container>
      <Header onClick={() => document.getElementById('searchbar').focus()}>
        <Input
          id='searchbar'
          type='text'
          value={search}
          onChange={(v) => setSearch(String(v.target.value).toLowerCase())}
          placeholder='Buscar'
        />

        <ResultCount>
          {filterBySearch(pokemonList).length > 0 &&
            `${filterBySearch(pokemonList).length} / ${pokemonList.count}`}
        </ResultCount>
      </Header>
      <Results>
        {filterBySearch(pokemonList).map((p) => (
          <ResultItem key={p.name} onClick={() => onSelect(p.name)}>
            {p.name}
          </ResultItem>
        ))}
      </Results>
    </Container>
  );
};

export default Searchbar;
