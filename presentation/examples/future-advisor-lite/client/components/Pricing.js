import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import s from './Pricing.styl';
const cx = classnames.bind(s);

export const RetirementAdvice = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>Retirement Avice</h1>
    </div>
    <p>Hey this is some retirement advice</p>
  </div>
);

export const InvestmentManagement = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>Investment Management</h1>
    </div>
    <p>Hey this is some investment management</p>
  </div>
);

export const CollegeSavings = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>College Savings</h1>
    </div>
    <p>Hey this is some college savings</p>
  </div>
);

export const Pricing = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },

  render() {
    return (
      <div>
        <div className={s.banner}>
          <div className={s.container}>
            <h1>Invest like a millionaire,<br />for less than you think</h1>
            <p>Select a service below to see how much we charge</p>
          </div>
        </div>
        <nav className={s.nav}>
          <div className={s.container}>
            <Link to='/pricing/retirement-advice' activeClassName={s.active}>
              <i className='fa fa-line-chart'></i>
              Retirement Advice
            </Link>
            <Link to='/pricing/investment-management' activeClassName={s.active}>
              <i className='fa fa-sun-o'></i>
              Investment Management
            </Link>
            <Link to='/pricing/college-savings' activeClassName={s.active}>
              <i className='fa fa-university'></i>
              College Savings
            </Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
