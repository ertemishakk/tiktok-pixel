# React Tiktok Pixel

[![npm](https://img.shields.io/npm/dm/tiktok-pixel.svg)](https://www.npmjs.com/package/tiktok-pixel)

> React JS wrapper for [Tiktok's Pixel](https://ads.tiktok.com/help/article?aid=10021)

## Install

```bash
npm install --save tiktok-pixel

```

or

```bash
yarn add tiktok-pixel

```

## How to use

```js
import TiktokPixel from 'tiktok-pixel';

const advancedMatching = {
  email: 'some@email.com',
  phone_number: '0123456789',
}; // optional, more info: https://ads.tiktok.com/help/article?aid=10007891
const options = {
  debug: false, // enable logs
};
TiktokPixel.init('yourPixelIdGoesHere', advancedMatching, options);

TiktokPixel.pageView(); // For tracking page view
TiktokPixel.track(event, data); // For tracking default events. More info about standard events: https://ads.tiktok.com/help/article?aid=10028

const trackingOptions = {
  event_id: 'some ID', // optional
};

TiktokPixel.track(event, data, trackingOptions);
```

if you're bundling in CI

```js
  ...
  componentDidMount() {
    const TiktokPixel =  require('tiktok-pixel');
    TiktokPixel.default.init('yourPixelIdGoesHere');
  }
  ...
```

otherwise CI will complain there's no `window`.

## Dev Server

```bash
npm run start

```

Default dev server runs at localhost:8080 in browser.
You can set IP and PORT in webpack.config.dev.js

## Production Bundle

```bash
npm run bundle
```
