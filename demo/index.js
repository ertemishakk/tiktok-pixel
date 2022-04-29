import React from 'react';
import ReactDOM from 'react-dom';
import TiktokPixel from '../src/index';

TiktokPixel.init('facebook_pixel_id', {}, { debug: true, autoConfig: false });
TiktokPixel.pageView();
TiktokPixel.track('AddToCart', {
  content_name: 'book',
  value: 10.0,
  currency: 'USD',
});

ReactDOM.render(
  <div>
    <h1>React Tiktok Pixel Tested</h1>
    <button
      type="button"
      onClick={() =>
        TiktokPixel.track('CompletePayment', {
          content_type: 'product',
          content_id: '32',
          description: 'Double Cheese Burger',
          quantinty: 1,
          value: 5,
          currency: 'USD',
        })
      }
    >
      Track Purchase
    </button>
  </div>,
  document.getElementById('app'),
);
