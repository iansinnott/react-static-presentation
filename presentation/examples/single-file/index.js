import React from 'react';
import ReactDOM from 'react-dom/server';
import fs from 'fs';

const App = () => (
  <div className='App'>
    <h1>Hi there</h1>
  </div>
);

const Html = props => {
  const html = { __html: props.children };
  return (
    <html lang='en'>
      <head>
        <title>App</title>
        <link rel='stylesheet' href='/app.css' />
      </head>
      <body>
        <div id='root' dangerouslySetInnerHTML={html} />
        <script src='/app.js'></script>
      </body>
    </html>
  );
};

const doc = '<!doctype html>' + ReactDOM.renderToStaticMarkup(
  <Html>
    {ReactDOM.renderToString(<App />)}
  </Html>
);

fs.writeFileSync('index.html', doc);

console.log(`File written: ${process.cwd()}/index.html`);

/* This file will output the following with minification
<!doctype html>
<html lang="en">
  <head>
    <title>App</title>
    <link rel="stylesheet" href="/app.css">
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
*/
