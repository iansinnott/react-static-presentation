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

  InvestingLibrary,
  Featured,
  GettingStarted,
  ReachYourGoals,
  MoneyBlog,

  NotFound,
} from './components';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />

    <Route path='pricing' component={Pricing}>
      <IndexRedirect to='retirement-advice' />
      <Route path='retirement-advice' component={RetirementAdvice} />
      <Route path='investment-management' component={InvestmentManagement} />
      <Route path='college-savings' component={CollegeSavings} />
    </Route>

    <Route path='who-we-are' component={WhoWeAre} />

    <Route path='investing-library' component={InvestingLibrary}>
      <IndexRedirect to='featured' />
      <Route path='featured' component={Featured} />
      <Route path='getting-started' component={GettingStarted} />
      <Route path='goals' component={ReachYourGoals} />
      <Route path='blog' component={MoneyBlog} />
    </Route>

    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);
