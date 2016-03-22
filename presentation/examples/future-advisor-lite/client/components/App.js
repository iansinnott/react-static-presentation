import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import classnames from 'classnames/bind';
import s from './App.styl';
const cx = classnames.bind(s);

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export const Home = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>React Static</h1>
        </div>
        <p>Why static sites with React?</p>
        <ul>
          <li><span className={s.hl}>Dev</span> friendly</li>
          <li><span className={s.hl}>User</span> friendly</li>
          <li><span className={s.hl}>SEO</span> friendly</li>
        </ul>
      </div>
    );
  },
});

export const NotFound = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Not found</h1>
        </div>
        <h1>(╯°□°）╯︵ ┻━┻</h1>
        <p>Click <Link to='/'>here</Link> to go back to the home page.</p>
      </div>
    );
  },
});

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export const App = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },
  render() {
    return (
      <div className={s.App}>
        <nav className={s.nav}>
          <IndexLink to='/' className={s.logo}>
            <img src={require('./fa-logo.png')} alt='Future Advisor Logo' />
          </IndexLink>
          <Link to='/pricing/retirement-advice' activeClassName={s.active}>Pricing</Link>
          <Link to='/who-we-are' activeClassName={s.active}>Who We Are</Link>
          <Link to='/investment-library' activeClassName={s.active}>Who We Are</Link>
          <div className={s.right}>
            <Link to='/login' className={s.login}>Log In</Link>
            <Link to='/sign-up' className={s.signUp}>Sign up for free</Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
