import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import s from './Pricing.styl';

export const RetirementAdvice = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Retirement Avice</h1>
        </div>
        <p>Hey this is some retirement advice</p>
      </div>
    );
  },
});

export const InvestmentManagement = React.createClass({
  render() {
    return (
      <div className={s.InvestmentManagement}>
        <span className='temp'>InvestmentManagement</span>
      </div>
    );
  },
});

export const CollegeSavings = React.createClass({
  render() {
    return (
      <div className={s.CollegeSavings}>
        <span className='temp'>CollegeSavings</span>
      </div>
    );
  },
});

export const Pricing = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },

  render() {
    return (
      <div>
        <div className={s.banner}>
          <h1>Invest like a millionaire,<br />for less than you think</h1>
          <p>Select a service below to see how much we charge</p>
        </div>
        <nav className={s.nav}>
          <Link to='/pricing/retirement-advice' activeClassName={s.active}>
            <i className='fa fa-line-chart'></i>
            Retirement Advice
          </Link>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
