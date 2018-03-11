import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'components/About';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </Switch>
)