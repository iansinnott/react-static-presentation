import React from 'react';
import { Link } from 'react-router';

import { posts } from '../posts.js';
import s from './Posts.styl';

export const Post = React.createClass({
  render() {
    const key = this.props.route.path;
    const html = { __html: posts[key] }
    return (
      <div className={s.Post} dangerouslySetInnerHTML={html} />
    );
  },
});

export const Posts = React.createClass({
  render() {
    return (
      <div className={s.Posts}>
        <div className={s.page}>
          <div className={s.siteTitle}>
            <h1>Posts</h1>
          </div>
          {posts.map((markdown, i) => {
            return <Link style={{ display: 'block' }} to={`/posts/${i}`} key={i}>Link to post {i}</Link>
          })}
        </div>
      </div>
    );
  },
});


export const PostsContainer = React.createClass({
  render() {
    return (
      <div className={s.PostsContainer}>
        {this.props.children}
      </div>
    );
  },
});

