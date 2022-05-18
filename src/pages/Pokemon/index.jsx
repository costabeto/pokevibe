import React, { useEffect, useMemo } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import pokeapi from '../../services/pokeapi';
import { addVisited, getVisited } from '../../store/slices/visitedSlice';
import { capitalize } from '../../utils/formatting';
import Stats from './components/Stats';
import {
  Container,
  GoBack,
  Header,
  Image,
  Name,
  PokeId,
  Type,
  Types,
} from './styles';

const Pokemon = () => {
  const params = useParams();
  const history = useHistory();

  const urlName = useMemo(() => {
    const { name } = params;

    const validName = String(name);

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

  const dispatch = useDispatch();

  const pokemon = useSelector(getVisited(urlName));

  useEffect(() => {
    if (!pokemon) {
      pokeapi
        .get(`https://pokeapi.co/api/v2/pokemon/${urlName}`)
        .then((response) =>
          dispatch(addVisited(pokemonFormatting(response.data)))
        );
    }
  }, [dispatch, pokemon, urlName]);

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
