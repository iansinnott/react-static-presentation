/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import s from './InvestingLibrary.styl';
const cx = classnames.bind(s);

export const Featured = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>Featured</h1>
    </div>
    <p>Here is some featured stuff</p>
  </div>
);

export const GettingStarted = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>Getting Started</h1>
    </div>
    <p>Let's get you started</p>
  </div>
);

export const ReachYourGoals = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>Reach Your Goals</h1>
    </div>
    <p>Goals are good. Let's make some</p>
  </div>
);

export const MoneyBlog = () => (
  <div className={cx('container', 'page')}>
    <div className={s.siteTitle}>
      <h1>Money Blog</h1>
    </div>
    <p>This is a blog. About money.</p>
  </div>
);

export const InvestingLibrary = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },

  render() {
    return (
      <div>
        <div className={s.banner}>
          <div className={s.container}>
            <h1>Investing Library</h1>
          </div>
        </div>
        <nav className={s.nav}>
          <div className={s.container}>
            <Link to='/investing-library/featured' activeClassName={s.active}>Featured</Link>
            <Link to='/investing-library/getting-started' activeClassName={s.active}>Getting Started</Link>
            <Link to='/investing-library/goals' activeClassName={s.active}>Reach Your Goals</Link>
            <Link to='/investing-library/blog' activeClassName={s.active}>Money Blog</Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
