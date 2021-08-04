import React, { useMemo } from 'react';
import { Container } from './styles';
import { useParams, useHistory } from 'react-router-dom';

const Pokemon = () => {
  const params = useParams();
  const history = useHistory();

  const name = useMemo(() => {
    const { id } = params;

    const validName = String(id);

    if (!validName) {
      history.goBack();
    }

    return validName;
  }, [history, params]);

  return <Container>{name}</Container>;
};

export default Pokemon;
