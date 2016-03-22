import React from 'react';

import s from './About.styl';

export const WhoWeAre = React.createClass({
  render() {
    return (
      <div>
        <div className={s.banner}>
          <div className={s.container}>
            <h1>Get advice from our industry-leading experts</h1>
            <p>
              We are an award-winning investment advisory firm serving clients
              nationwide from our offices in downtown San Francisco. And we're
              working for you.
            </p>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.siteTitle}>
            <h1>More information about us</h1>
          </div>
          <p style={{ maxWidth: 600 }}>
            Our investment decisions are backed by Nobel-Prize winning theory
            and continuously refined by an Investment Council of notable
            scholars and finance experts. The Committee has decades of
            experience and billions of dollars behind them.
          </p>
        </div>
      </div>
    );
  },
});
