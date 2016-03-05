import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, NotFound } from './components/App.js';
import { About } from './components/About.js';
import { PostsContainer, Posts, Post } from './components/Posts.js';

import { posts } from './posts.js';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />
    <Route path='posts' title='App' component={PostsContainer}>
      <IndexRoute component={Posts} />
      {posts.map((markdown, i) => {
        return <Route key={i} path={String(i)} component={Post} />;
      })}
    </Route>
    <Route path='about' title='App - About' component={About} />
    <Route path='shmabout' title='App - About' component={About} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
