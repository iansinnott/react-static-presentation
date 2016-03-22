import React from 'react';

import s from './About.styl';

export const WhoWeAre = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Who We Are</h1>
        </div>
        <p>Welcome, to about us.</p>
      </div>
    );
  },
});
