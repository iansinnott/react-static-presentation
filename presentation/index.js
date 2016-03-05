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

const VenDiagram = React.createClass({
  render() {
    return (
      <div className={s.VenDiagram}>
        <div className={cx('static-ven')}>Static</div>
        <div className={cx('react-ven')}>React</div>
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
            <div className={cx('red-bar')} />
            <Text className={cx('tal')} textColor='white' caps textSize='1.5em' margin='20px 0px 0px' bold>Ian Sinnott</Text>
            <img className={cx('sponsors')} src={require('./img/sponsor-logos.png')} />
            <img className={cx('wifi')} src={require('./img/wifi.png')} />
          </Slide>

          <Slide transition={['slide']}>
            <img className={cx('face')} src={require('./img/face.png')} />
            <Heading size={2} textColor='white' textFont='primary'>
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

          <Slide transition={['slide']}>
            <Heading size={2} textColor={reactBlue} textFont='primary'>
              Develpoer Experience
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Full power of JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Familiar
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







          <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
            <CodePane
              lang='jsx'
              source={require('raw!../assets/deck.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide transition={['slide']} bgImage={require('./img/react-static-presentation-intro-bg.jpg')}>
            <Appear fid='1'>
              <Heading size={1} caps fit textColor='primary'>
                Full Width
              </Heading>
            </Appear>
            <Appear fid='2'>
              <Heading size={1} caps fit textColor='tertiary'>
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid='3'>
              <Heading size={1} caps fit textColor='primary'>
                Background Imagery
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor='primary'>
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['spin', 'zoom']} bgColor='tertiary'>
            <Heading caps fit size={1} textColor='primary'>
              Inline Markdown
            </Heading>
            <Markdown>
              {`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={['slide', 'spin']} bgColor='primary'>
            <Heading caps fit size={1} textColor='tertiary'>
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor='secondary'>
              Combinable Transitions
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='tertiary'>
              Your presentations are interactive
            </Heading>
          </Slide>

          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Made with love in Seattle by
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
