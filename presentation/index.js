// Import React
import React from 'react';
import classnames from 'classnames/bind';
import 'react-fa';

import s from './index.styl';
const cx = classnames.bind(s);

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import theme, { reactBlue, githubGray } from './theme.js';

const StaticCircle = props => (
  <div {...props} className={cx('static-ven', props.className)}>Static</div>
);

const ReactCircle = props => (
  <div {...props} className={cx('react-ven', props.className)}>React</div>
);

const VenDiagram = React.createClass({
  render() {
    return (
      <div className={cx('VenDiagram', this.props.className)}>
        <StaticCircle className={cx({ hidden: this.props.hide === 'static'})} />
        <ReactCircle className={cx({ hidden: this.props.hide === 'react'})} />
      </div>
    );
  },
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide transition={['zoom']} bgColor='primary'>
            <Heading className={cx('title', 'first')} size={1} caps lineHeight={1} textColor='white'>
              Building Static Sites
            </Heading>
            <Heading className={cx('title', 'second')} size={1} caps lineHeight={1} textColor='white'>
              With React
            </Heading>
            <div className={cx('red-bar')} />
            <Text className={cx('tal')} textColor='white' caps textSize='1.5em' margin='20px 0px 0px' bold>Ian Sinnott</Text>
          </Slide>

          <Slide transition={['slide']}>
            <img className={cx('face')} src={require('./img/face.png')} />
            <Heading style={{ fontWeight: 300 }} size={2} textColor='white' textFont='primary'>
              Ian Sinnott
            </Heading>
            <List className={s.ianList}>
              <Appear>
                <ListItem>
                  <i className='fa fa-suitcase'></i> TruSTAR
                </ListItem>
              </Appear>
              <Appear>
                <ListItem style={{listStyle: 'none'}}>
                  <i className='fa fa-heart'></i> React
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Image src={require('./img/react-only.png')} width='80%'></Image>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} caps fit textColor='white' textFont='primary'>
              Static Sites
            </Heading>
            <Appear>
              <Heading size={2} caps fit textColor={reactBlue} textFont='primary'>
                Who's excited?
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={['zoom']} transitionDuration={2000}>
            <VenDiagram className={cx('ven-face')} />
          </Slide>

          <Slide transition={['fade']}>
            <Appear>
              <Heading size={2} caps fit textColor='white' textFont='primary'>
                What are we trying
              </Heading>
            </Appear>
            <Appear>
              <Heading size={2} caps fit textColor={reactBlue} textFont='primary'>
                to accomplish?
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Wants
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  SEO
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Performance
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  (Relative) Security
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Simple Deployment
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} transitionDuration={2000}>
            <StaticCircle />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Also want
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Full power of JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Modules, hot reloading, ES6, etc
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Use existing knowledge
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Minimal static site boilerplate
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']} transitionDuration={2000}>
            <VenDiagram hide='static' />
          </Slide>

          <Slide transition={['fade']} transitionDuration={2000}>
            <VenDiagram  />
          </Slide>

          <Slide transition={['zoom']} bgColor='primary'>
            <Heading size={1} caps fit lineHeight={1} textColor='white'>
              Universal JS
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor={reactBlue}>
              Without
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='white'>
              The server
            </Heading>
          </Slide>

          <Slide className={cx('spectacle-content')} transition={['slide']}>
            <Heading size={2} textColor='white' textFont='primary'>
              Want to see
            </Heading>
            <Appear>
              <Image src={require('./img/app-to-index.html.png')} width='80%'></Image>
            </Appear>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.8rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
// App.js
import React from 'react';

const App = () => (
  <div className='App'>
    <h1>Hi there</h1>
  </div>
);
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='html'
              margin='20px auto'>
              {`
<!-- Layout.html -->
<!doctype html>
<html lang="en">
  <head>
    <title>App</title>
  </head>
  <body>
    <div id="root">
      <!-- App will will render here -->
    </div>
    <script src="/app.js"></script>
  </body>
</html>
              `.trim()}
            </CodePane>
          </Slide>
          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='html'
              margin='20px auto'>
              {`
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <title>App</title>
  </head>
  <body>
    <div id="root">
      <div class="App" data-reactid=".1p6juf4im0w" data-react-checksum="943857564">
        <h1 data-reactid=".1p6juf4im0w.0">Hi there</h1>
      </div>
    </div>
    <script src="/app.js"></script>
  </body>
</html>
              `.trim()}
            </CodePane>
          </Slide>





          <Slide className={cx('spectacle-content')} transition={['slide']}>
            <Heading size={2} caps textColor='white' textFont='primary'>
              So were done?
            </Heading>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Wants
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    SEO
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Performance
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    (Relative) Security
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Simple Deployment
                  </span>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Also want
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Full power of JavaScript
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Modules, hot reloading, ES6, etc
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Use existing knowledge?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Minimal static site boilerplate?
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={1} caps fit textColor='white' textFont='primary'>
              Feels Universal?
            </Heading>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={1} caps fit textColor={reactBlue} textFont='primary'>
              React Router
            </Heading>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, NotFound } from './components/App.js';
import { About } from './components/About.js';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='*' component={NotFound} />
  </Route>
);
              `.trim()}
            </CodePane>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              React Router
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Describes your client side routes
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Describes nested routes
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Already works on the server
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.4rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='*' component={NotFound} />
  </Route>
);
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.4rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />          // => index.html
    <Route path='about' component={About} /> // => about.html
    <Route path='*' component={NotFound} />  // => 404.html
  </Route>
);
              `.trim()}
            </CodePane>
          </Slide>

          <Slide transition={['zoom']}>
            <Heading size={2} caps fit style={{ fontWeight: 100 }} textColor='white' textFont='primary'>
              Demo
            </Heading>
          </Slide>

          <Slide className={cx('spectacle-content', 'repos')} transition={['slide']} bgColor={githubGray}>
            <Image src={require('./img/react-static-webpack-plugin.png')} width='80%'></Image>
            <Appear>
              <Image src={require('./img/react-static-boilerplate.png')} width='70%'></Image>
            </Appear>
            <Appear>
              <Heading size={2} style={{ fontWeight: 100 }} textColor='#333' textFont='primary'>
                git.io/react-static
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Also want
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Full power of JavaScript
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Modules, hot reloading, ES6, etc
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Use existing knowledge?
                  </span>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <span style={{ color: '#D4D4D4', textDecoration: 'line-through' }}>
                    Minimal static site boilerplate?
                  </span>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              What's it look like
            </Heading>
            <List>
              <Appear><ListItem>Build front-end app</ListItem></Appear>
              <Appear><ListItem><Code style={{ color: 'white'}}>npm run build</Code></ListItem></Appear>
              <Appear><ListItem>Deploy full static website to the host of your choice</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={1} caps fit textColor={reactBlue} textFont='primary'>
              Servers
            </Heading>
            <Heading size={1} caps fit textColor='white' textFont='primary'>
              Are still cool
            </Heading>
            <Appear>
              <Heading size={1} caps fit textColor={reactBlue} textFont='primary'>
                ...but do you need one?
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Static site use cases
            </Heading>
            <List>
              <Appear><ListItem>Blogs</ListItem></Appear>
              <Appear><ListItem>Marketing websites</ListItem></Appear>
              <Appear><ListItem>Documentation</ListItem></Appear>
              <Appear><ListItem>Email signup pages</ListItem></Appear>
              <Appear><ListItem>Contact forms</ListItem></Appear>
              <Appear><ListItem>Etc...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              The Static Ecosystem
            </Heading>
            <List>
              <Appear><ListItem>Online form services</ListItem></Appear>
              <Appear><ListItem>Static site hosts</ListItem></Appear>
              <Appear><ListItem>Comment services</ListItem></Appear>
              <Appear><ListItem>AWS Lambda + API Gateway</ListItem></Appear>
              <Appear><ListItem>Serverless</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={3} textColor='white'>Other Resources</Heading>
          </Slide>

          <Slide bgColor={githubGray} transition={['slide']}>
            <a href='https://github.com/gatsbyjs/gatsby' target='_blank'>
              <Image src={require('./img/gatsby.png')} width='100%'></Image>
            </a>
            <a href='https://github.com/jxnblk/static-react' target='_blank'>
              <Image src={require('./img/jxnblk.png')} width='100%'></Image>
            </a>
            <a href='https://github.com/koistya/react-static-boilerplate' target='_blank'>
              <Image src={require('./img/koistya.png')} width='100%'></Image>
            </a>
            <a href='https://github.com/MoOx/statinamic' target='_blank'>
              <Image src={require('./img/moox.png')} width='100%'></Image>
            </a>
            <a href='https://github.com/qimingweng/static-render-webpack-plugin' target='_blank'>
              <Image src={require('./img/qimingweng.png')} width='100%'></Image>
            </a>
            <a href='https://github.com/yeojz/metalsmith-react-templates' target='_blank'>
              <Image src={require('./img/metalsmith.png')} width='100%'></Image>
            </a>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={1} caps fit textColor={reactBlue} textFont='primary'>
              Static
            </Heading>
            <Heading size={1} caps fit textColor='white' textFont='primary'>
              is cool
            </Heading>
          </Slide>

          <Slide transition={['zoom']}>
            <img className={cx('face')} src={require('./img/face.png')} />
            <Heading style={{ fontWeight: 300 }} size={2} textColor='white' textFont='primary'>
              Thanks
            </Heading>
            <p style={{ textAlign: 'left', color: reactBlue, }}>Slides</p>
            <p style={{ textAlign: 'left' }}>git.io/static-presentation</p>
            <p style={{ textAlign: 'left', color: reactBlue, }}>Questions?</p>
            <List>
              <ListItem>@ian_989</ListItem>
              <ListItem>github.com/iansinnott</ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
