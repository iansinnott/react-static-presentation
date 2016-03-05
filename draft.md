---

# Building Static Sites With React

-- Ian Sinnott

---

# Ian Sinnott

* Software Engineer @TruSTAR
  * Rewrote all the things with React (including our marketing website)
  * Why? Native Java app + 5K lines of jquery
* Love React
* Transformed the way I build software

---

IMG of our marketing website
Explain breifly what wapalyzer does

---

# Building static sites with React

* Static sites, who's excited?

--- 

So I'm here to talk about building static sites with React, but first, let's zoom out.

Ven diagram here

---

"What are we doing here?"
"What are we trying to accomplish?"

More specifically, what—as web developers—are we trying to accomplish when we build a website.

---

Your list may differ, but here are things I often find on my list of things I want in a website I'm building

* Indexable by search engines
* Performant (for usability and scaling reasons)
* Secure(ish) (b/c you will probably never have a website that could be considered completely "secure")
* Easily deployable

---

You're list may differ, but this list is a pretty safe bet for most public-facing websites.

---

But, b/c I really like building product, and I want to continue to like this product that i'm biuldig, there are a few more things i want and they don't pertain directly to end users:

# Developer Experience

* Full power of JS (no watered down templating)
* Familiar
* Write once. I.e. give me all the benefits (and more) of universal rendering
* Efficiently uses my time and computers time (explain this. "Anyone remember the dark ages of manual minification?") -> I.e. i want static site generation to be an afterthought

Again, your own list is likely different but these are all nice to haves.

---

The magical intersection

Show ven diagram

When you build static sites with react you can get all of this, at once.

The intersection of these circles is what we're going to explore in the rest of this talk.

---

# A brief aside
 
I am not the first person to think that building static sites with react is a great idea. There are other projects out there, but when I explored the ecosystem late last year I didn't find any existing solutions that accomplished everything I wanted.

I will discuss this in more detail later.

---

# Diving in

Now that we know what the why, let's dive in to the how.

Let's take a React copmonent and render out a single `index.html` file.

---

```js
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
```

^ Explain this slide a bit
^ Explain why we need to combine renderToString and renderToStaticMarkup

---

# This works

Let's look back at our checklist of features

* ~~Indexable by search engines~~
* ~~Performant~~ 
* ~~Secure(ish)~~  (i.e. we don't need a back end)
* ~~Easily deployable~~
* ~~Full power of JS~~ (no watered down templating)
* ~~Familiar~~
* Write once. I.e. give me all the benefits (and more) of universal rendering
  With minor refactoring we can do this. We'll just need to separate out the fs logic and add in some render logic conditional on `document` being defined
* Efficiently uses my time and computers time
  Eh... sort of. The computer is definitely taking care of the static rendering but it did take a bit of setup. And this solution is inflexible

But what about apps with multiple pages?

---

# Enter React Router

In the theme of using technology you already know, why not just use React Router?

* If you've built any full-react SPAs you probably know about RR
* It lets you describe all the routes to your app in a very React-friendly way
* These routes describe all the possible URLs for your app -> stands to reason that we could use the router config to generate static files

---

This is where things start getting exciting

React Router has a documented API for rendering a Route to a string

```js
// Add match API example here
```

---

Add diagram here showing:

'/about' -> About component -> renderToString(<About />)

* Given a route
* Return the routed component
* Now we can do what we want with it, i.e. render to string

We have this API there for us already, but where does that route string come from? We need to generate it from the Router config

---

Take in Routes component -> traverse tree data structure -> build list of routes

```
'/'
'/about'
'/contact'
```

Now that we have all the routes, we can feed them into React Router get back our full components

---

And it worked! After building out an initial proof of concept it was clear that this was useful. so I built it into a plugin

---

Now, this is where this cool static site generation starts getting build tool-specific. 

That's not the intent, but Webpack is what I use so it's what I went with when building this out

Webpack gives us a ton of benefits in the DX department

Anyway, I built this plugin so that you can specifcy an 'entrypoint' that exports a `Routes` component and all your routes will be generated as static html files \o/


