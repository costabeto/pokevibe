import React, { useEffect, useMemo, useState } from 'react';
import {
  Container,
  GoBack,
  Header,
  PokeId,
  Image,
  Name,
  Type,
  Types,
} from './styles';
import { useParams, useHistory } from 'react-router-dom';
import pokeapi from '../../services/pokeapi';
import { FiChevronLeft } from 'react-icons/fi';

import Stats from './components/Stats';
import { capitalize } from '../../utils/formatting';

const Pokemon = () => {
  const params = useParams();
  const history = useHistory();
  const [pokemon, setPokemon] = useState(null);

  const name = useMemo(() => {
    const { id } = params;

    const validName = String(id);

    if (!validName) {
      history.goBack();
    }

    return validName;
  }, [history, params]);

  function pokemonFormatting(data) {
    const { id, sprites, height, weight, base_experience } = data;

    const name = capitalize(data.name);

    const types = data.types.map((t) => {
      t.name = capitalize(t.type.name);
      t.label = t.type.name;

      return t;
    });

    const stats = data.stats.map((s) => {
      const name = capitalize(s.stat.name);

      return { name, value: s.base_stat };
    });

    const abilities = data.abilities.map((a) => a.ability.name);

    return {
      stats,
      types,
      name,
      id,
      sprites,
      height,
      weight,
      abilities,
      base_experience,
    };
  }

  useEffect(() => {
    const localPokemons = JSON.parse(
      localStorage.getItem('@pokevibe-pokemons-cache') || '[]'
    );

    const [result] = localPokemons.filter((p) => p.name === name);

    if (result) {
      setPokemon(pokemonFormatting(result));
    } else {
      pokeapi
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          const { data } = response;

          const newLocalPokemons = [...localPokemons, data];

          localStorage.setItem(
            '@pokevibe-pokemons-cache',
            JSON.stringify(newLocalPokemons)
          );

          setPokemon(pokemonFormatting(data));
        });
    }
  }, [name]);

  return (
    pokemon && (
      <Container>
        <Header>
          <GoBack onClick={() => history.goBack()}>
            <FiChevronLeft />
            Go back
          </GoBack>
          <PokeId>nº{pokemon.id}</PokeId>
        </Header>
        <Name>{pokemon.name}</Name>
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name}-image`}
          title={pokemon.name}
        />
        <Types>
          {pokemon.types.map((t) => (
            <Type key={t.label} type={t.label}>
              {t.name}
            </Type>
          ))}
        </Types>

        <Stats data={pokemon.stats} />

        <div>
          {pokemon.height} M - {pokemon.weight} KG
        </div>

        <div>Base Experience: {pokemon.base_experience}</div>

        <div>Abilities</div>
        {pokemon.abilities.map((a) => (
          <p key={a}>{a}</p>
        ))}
      </Container>
    )
  );
};

export default Pokemon;
