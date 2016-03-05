// Import React
import React from 'react';

import s from './index.styl';

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

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide
            transition={['zoom']}
            bgImage={require('./img/react-static-presentation-intro-bg.jpg')}
            bgColor='primary'>
            <Heading className={s.title} size={1} caps lineHeight={1} textColor='white'>
              Building Static Sites
            </Heading>
            <Heading size={1} caps lineHeight={1} textColor='white'>
              With React
            </Heading>
            <div style={{ margin: '20px 0' }}>--------</div>
            <Text textColor='white' textSize='1.5em' margin='20px 0px 0px' bold>Ian Sinnott</Text>
          </Slide>
          <Slide transition={['slide']} bgColor='black' notes='You can even put notes on your slide. How awesome is that?'>
            <Heading size={2} caps fit textColor='primary' textFont='primary'>
              Wait what?
            </Heading>
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
