import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Image,
  Name,
  Pokemon,
  PokemonList,
  Type,
  Info,
  Description,
} from './styles';
import pokeapi from '../../services/pokeapi';

const Pokedex = () => {
  const [pagination, setPagination] = useState({ offset: 0, limit: 20 });
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemon = useCallback(async (pokemon) => {
    const { data } = await pokeapi.get(pokemon.url);

    return await data;
  }, []);

  useEffect(() => {
    setLoading(true);
    pokeapi
      .get(`pokemon/?offset=${pagination.offset}&limit=${pagination.limit}`)
      .then((response) => {
        const { results } = response.data;

        const pokeinfo = results.map(async (p) => await getPokemon(p));

        Promise.all(pokeinfo)
          .then((pokemonsInfo) => {
            setPokemons(pokemonsInfo);
          })
          .catch(() => {
            setPokemons([]);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch(() => {
        setPokemons([]);
      });
  }, [getPokemon, pagination.limit, pagination.offset]);

  function handlePagination(number) {
    const newOffset = pagination.offset + Number(number);

    const newPagination = {
      limit: 20,
      offset: newOffset > 0 ? newOffset : 0,
    };

    setPagination(newPagination);
  }

  return (
    !loading && (
      <Container>
        <h1>
          Pokémons: {pagination.offset} to {pagination.offset + 20}
        </h1>
        <>
          <button onClick={() => handlePagination(-pagination.limit)}>
            Previous
          </button>
          <button onClick={() => handlePagination(pagination.limit)}>
            Next
          </button>
        </>
        <PokemonList>
          {pokemons.length > 0 &&
            pokemons.map((p) => (
              <Pokemon key={p.id}>
                <Name>
                  {p.name}
                  <div>no.{p.id}</div>
                </Name>
                <Info>
                  <Image src={p.sprites.front_default} alt='' />
                  <Description>
                    {p.types.map((t) => (
                      <Type key={t.slot} type={t.type.name}>
                        {t.type.name}
                      </Type>
                    ))}
                  </Description>
                </Info>
              </Pokemon>
            ))}
        </PokemonList>
      </Container>
    )
  );
};

export default Pokedex;
