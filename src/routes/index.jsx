import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import Home from '../pages/Home';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/pokedex' component={Pokedex} />
    </Switch>
  );
};

export default Routes;
