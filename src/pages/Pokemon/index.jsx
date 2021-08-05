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

  useEffect(() => {
    const localPokemons = JSON.parse(
      localStorage.getItem('@pokevibe-pokemons-cache') || '[]'
    );

    const [result] = localPokemons.filter((p) => p.name === name);

    if (result) {
      setPokemon(result);
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

          setPokemon(data);
        });
    }
  }, [name]);

  const mainType = useMemo(() => {
    if (pokemon) {
      const [type] = pokemon.types;

      return type.type.name;
    }

    return 'normal';
  }, [pokemon]);

  return (
    pokemon && (
      <Container type={mainType}>
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
            <Type key={t.type.name} type={t.type.name}>
              {t.type.name}
            </Type>
          ))}
        </Types>
        <div>
          {pokemon.height} M - {pokemon.weight} KG
        </div>
        <div>base experience: {pokemon.base_experience}</div>
        <div>Types</div>
        <div>Stats</div>
        {pokemon.stats.map((s) => (
          <p key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </p>
        ))}
        <div>Abilities</div>
        {pokemon.abilities.map((a) => (
          <p key={a.ability.name}>{a.ability.name}</p>
        ))}
      </Container>
    )
  );
};

export default Pokemon;
