import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import Pokemon from '../pages/Pokemon';
import Home from '../pages/Home';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/pokedex' component={Pokedex} />
      <Route exact path='/pokemon/:id' component={Pokemon} />
    </Switch>
  );
};

export default Routes;
