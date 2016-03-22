import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import classnames from 'classnames/bind';
import s from './App.styl';
const cx = classnames.bind(s);

import logo from './react-logo.png';

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export const Contact = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();

    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  },

  render() {
    return (
      <div className={cx('Contact', 'page')}>
        <div className={s.siteTitle}>
          <h1>Contact</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input name='email' type='email' placeholder='Email' />
          <textarea name='message' placeholder='Message...' />
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  },
});

export const Home = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <img src={logo} alt='React Logo' />
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
          <IndexLink to='/' activeClassName={s.active}>Home</IndexLink>
          <Link to='/about' activeClassName={s.active}>About</Link>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
