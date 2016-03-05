// Import React
import React from 'react';
import classnames from 'classnames/bind';

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

import theme, { reactBlue } from './theme.js';

const StaticCircle = () => (
  <div className={cx('static-ven')}>Static</div>
);

const ReactCircle = () => (
  <div className={cx('react-ven')}>React</div>
);

const VenDiagram = React.createClass({
  render() {
    return (
      <div className={cx('VenDiagram', this.props.className)}>
        <StaticCircle />
        <ReactCircle />
      </div>
    );
  },
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide
            className={cx('spectacle-content')}
            transition={['zoom']}
            bgImage={require('./img/react-static-presentation-intro-bg.jpg')}
            bgColor='primary'>
            <img className={cx('fitc')} src={require('./img/fitc-logo.png')} />
            <Heading className={cx('title', 'first')} size={1} caps lineHeight={1} textColor='white'>
              Building Static Sites
            </Heading>
            <Heading className={cx('title', 'second')} size={1} caps lineHeight={1} textColor='white'>
              With React
            </Heading>
            <div className={cx('red-bar')} /> {
            <Text className={cx('tal')} textColor='white' caps textSize='1.5em' margin='20px 0px 0px' bold>Ian Sinnott</Text>
            }
            <img className={cx('sponsors')} src={require('./img/sponsor-logos.png')} />
            <img className={cx('wifi')} src={require('./img/wifi.png')} />
          </Slide>

          <Slide transition={['slide']}>
            <img className={cx('face')} src={require('./img/face.png')} />
            <Heading style={{ fontWeight: 300 }} size={2} textColor='white' textFont='primary'>
              Ian Sinnott
            </Heading>
            <List>
              <Appear><ListItem>Software Engineer @TruSTAR</ListItem></Appear>
              <Appear><ListItem>Love React</ListItem></Appear>
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
            <VenDiagram />
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
                  Indexable by search engines
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Performant
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  (Relatively) Secure
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Easily deployable
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} transitionDuration={2000}>
            <StaticCircle />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Developer Experience
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Full power of JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Use existing knowledge
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Write once
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Hot reloading, modularized code, ES6, etc
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']} transitionDuration={2000}>
            <ReactCircle />
          </Slide>

          <Slide transition={['fade']} transitionDuration={2000}>
            <VenDiagram className={'ven-two'} />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={3} textColor='white'>Has this been done before?</Heading>
            <List>
              <Appear><ListItem><Heading size={3} textColor={reactBlue}>Yes, but...</Heading></ListItem></Appear>
              <Appear><ListItem>renderToStaticMarkup</ListItem></Appear>
              <Appear><ListItem>File system conventions, Markdown, etc</ListItem></Appear>
            </List>
          </Slide>

          <Slide className={cx('spectacle-content')} transition={['slide']}>
            <Image src={require('./img/react.svg')} width='40%'></Image>
            <Heading size={2} caps textColor={reactBlue} textFont='primary'>
              Diving in
            </Heading>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} caps textColor={reactBlue} textFont='primary'>
              Existing Tools
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  ReactDOM
                  <List>
                    <ListItem>
                      renderToString
                    </ListItem>
                    <ListItem>
                      renderToStaticMarkup
                    </ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Node
                  <List>
                    <ListItem>
                      fs.writeFile
                    </ListItem>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.8rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
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
              lang='jsx'
              margin='20px auto'>
              {`
import React from 'react';
import ReactDOM from 'react-dom/server';
import fs from 'fs';

const App = () => (
  <div className='App'>
    <h1>Hi there</h1>
  </div>
);

fs.writeFileSync('index.html', ReactDOM.renderToString(<App />));
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <Heading size={3} textColor='white' textFont='primary'>
              Hm...
            </Heading>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
<div class="App" data-reactid=".1p6juf4im0w" data-react-checksum="943857564">
  <h1 data-reactid=".1p6juf4im0w.0">Hi there</h1>
</div>
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
import React from 'react';

const Html = props => {
  const html = { __html: props.body };
  return (
    <html lang='en'>
      <body>
        <div id='root' dangerouslySetInnerHTML={html} />
        <script src='/app.js'></script>
      </body>
    </html>
  );
};
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
import ReactDOM from 'react-dom/server';
import fs from 'fs';
import App from './App';

const body = ReactDOM.renderToString(<App />);

const doc = '<!doctype html>' + ReactDOM.renderToStaticMarkup(
  <Html body={body} />
);

fs.writeFileSync('index.html', doc);
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.2rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
<!doctype html>
<html lang="en">
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
            <Image src={require('./img/app-to-index.html.png')} width='80%'></Image>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              But...
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Developer Experience?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Multi-page sites?
                </ListItem>
              </Appear>
            </List>
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
              style={{ fontSize: '1.2rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
import ReactDOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'

const location = '/about';

match({ routes, location }, (error, redirectLocation, renderProps) => {
  if (renderProps) {
    ReactDOM.renderToString(<RouterContext {...renderProps} />);
  } else {
    console.log('Not Found');
  }
});
              `.trim()}
            </CodePane>
          </Slide>

          <Slide className={cx('spectacle-content', 'codepane')} transition={['fade']} bgColor='primary'>
            <CodePane
              style={{ fontSize: '1.6rem' }}
              lang='jsx'
              margin='20px auto'>
              {`
export const routes = (
  <Route path='/' component={App}>           // => '/'      => index.html
    <IndexRoute component={Home} />          // => '/'      => [duplicate]
    <Route path='about' component={About} /> // => '/about' => about.html
    <Route path='*' component={NotFound} />  // => n/a      => 404.html
  </Route>
);
              `.trim()}
            </CodePane>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Developer Experience
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Full power of JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Use existing knowledge
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Write once
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Hot reloading, modularized code, ES6, etc
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Developer Experience
            </Heading>
            <List>
              <ListItem>
                <span style={{ color: '#828282', textDecoration: 'line-through' }}>
                  Full power of JavaScript
                </span>
              </ListItem>
              <ListItem>
                <span style={{ color: '#828282', textDecoration: 'line-through' }}>
                  Use existing knowledge
                </span>
              </ListItem>
              <ListItem>
                Write once?
              </ListItem>
              <ListItem>
                Hot reloading, modularized code, ES6, etc?
              </ListItem>
            </List>
          </Slide>

          <Slide bgColor='white' transition={['slide']}>
            <Heading size={1} textFont='primary'>
              <Image src={require('./img/webpack.png')} width='80%'></Image>
            </Heading>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Developer Experience
            </Heading>
            <List>
              <ListItem>
                <span style={{ color: '#828282', textDecoration: 'line-through' }}>
                  Full power of JavaScript
                </span>
              </ListItem>
              <ListItem>
                <span style={{ color: '#828282', textDecoration: 'line-through' }}>
                  Use existing knowledge
                </span>
              </ListItem>
              <ListItem>
                <span style={{ color: '#828282', textDecoration: 'line-through' }}>
                  Write once?
                </span>
              </ListItem>
              <ListItem>
                <span style={{ color: '#828282', textDecoration: 'line-through' }}>
                  Hot reloading, modularized code, ES6, etc?
                </span>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              How?
            </Heading>
            <List>
              <Appear><ListItem>Turn React Router config into a list of routes</ListItem></Appear>
              <Appear><ListItem>Iterate over that list, match with React Router</ListItem></Appear>
              <Appear><ListItem>Save strings to html files on disk</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Webpack Plugin
            </Heading>
            <Heading style={{ marginTop: 40 }} fit size={3} textColor='white' textFont='primary'>
              <a
                target='_blank'
                style={{ textDecoration: 'none', color: 'white' }}
                href='https://github.com/iansinnott/react-static-webpack-plugin'>
                iansinnott/react-static-webpack-plugin
              </a>
            </Heading>
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

          <Slide transition={['zoom']}>
            <img className={cx('face')} src={require('./img/face.png')} />
            <Heading style={{ fontWeight: 300 }} size={2} textColor='white' textFont='primary'>
              Thanks
            </Heading>
            <p style={{
              textAlign: 'left',
              fontSize: '3.6rem',
              color: reactBlue,
            }}>Slides</p>
            <p style={{ fontSize: '2.4rem', textAlign: 'left' }}>https://github.com/iansinnott/react-static-presentation</p>
            <p style={{
              textAlign: 'left',
              fontSize: '3.6rem',
              color: reactBlue,
            }}>Questions?</p>
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
