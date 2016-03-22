import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import {
  App,
  Home,
  WhoWeAre,

  Pricing,
  RetirementAdvice,
  InvestmentManagement,
  CollegeSavings,

  NotFound,
} from './components';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />
    <Route path='who-we-are' component={WhoWeAre} />

    <Route path='pricing' component={Pricing}>
      <IndexRedirect to='retirement-advice' />
      <Route path='retirement-advice' component={RetirementAdvice} />
      <Route path='investment-management' component={InvestmentManagement} />
      <Route path='college-savings' component={CollegeSavings} />
    </Route>

    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);
