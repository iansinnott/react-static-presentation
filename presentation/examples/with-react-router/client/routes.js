import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, NotFound, Contact } from './components/App.js';
import { About } from './components/About.js';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='contact' component={Contact} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);
