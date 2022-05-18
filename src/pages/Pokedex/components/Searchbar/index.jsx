import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import pokeapi from '../../../../services/pokeapi';
import { getNames, setNames } from '../../../../store/slices/namesSlice';
import {
  Container,
  Header,
  Input,
  ResultCount,
  ResultItem,
  Results,
} from './styles';

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();
  const names = useSelector(getNames());

  useEffect(() => {
    pokeapi.get('/pokemon/?offset=0&limit=2000').then((response) => {
      dispatch(setNames(response.data.results));
    });
  }, [dispatch]);

  const filtered = useMemo(() => {
    if (!names) return [];
    return names.filter((p) => search && p.name.includes(search));
  }, [names, search]);

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
          {filtered.length > 0 && `${filtered.length} / ${names.length}`}
        </ResultCount>
      </Header>
      <Results>
        {filtered.map((p) => (
          <ResultItem key={p.name} onClick={() => onSelect(p.name)}>
            {p.name}
          </ResultItem>
        ))}
      </Results>
    </Container>
  );
};

export default Searchbar;
