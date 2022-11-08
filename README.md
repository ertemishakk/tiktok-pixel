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

## Running the example

```bash
yarn build
cd example
yarn start

```

## Event Types

| Event type           | Recommended parameters                                           |
| -------------------- | ---------------------------------------------------------------- |
| AddPaymentInfo       |                                                                  |
| AddToCart            | content_type, quantity, description, content_id, currency, value |
| AddToWishlist        |                                                                  |
| ClickButton          |                                                                  |
| CompletePayment      | content_type, quantity, description, content_id, currency, value |
| CompleteRegistration |                                                                  |
| Contact              |                                                                  |
| Download             |                                                                  |
| InitiateCheckout     |                                                                  |
| PlaceAnOrder         | content_type, quantity, description, content_id, currency, value |
| Search               |                                                                  |
| SubmitForm           |                                                                  |
| Subscribe            |                                                                  |
| ViewContent          | content_type, quantity, description, content_id, currency, value |

## Parameters

| Parameter              | Description                                                                                                                                                                                                                                                                                                                                                                     | Value type                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| content_type           | The content_type object property's value must be set to either product, or product_group, depending on how you will configure your data feed when you set up your product catalog. If you will be tracking events associated with individual products, set the value to product. If you are tracking events associated with product groups, set it to product_group instead.    | Must be either product or product_group.                                                                                                           |
| content_id or contents | Use contents when you have multiple content IDs. If you use contents in your parameter, you must also include the following in a sub-object: the product id or ids, and the quantity (number of items added to cart or purchased).                                                                                                                                              | Must be a string if using 'content_id.' Must be an array of objects (content parameter, id sub-object and quantity sub-object) if using 'contents' |
| content_category       | Category of the page/product                                                                                                                                                                                                                                                                                                                                                    | string                                                                                                                                             |
| content_name           | Name of the page/product                                                                                                                                                                                                                                                                                                                                                        |
| string                 |
| currency               | SO 4217 code. List of currencies currently supported: AED, ARS, AUD, BDT, BHD, BIF, BOB, BRL, CAD, CHF, CLP, CNY, COP, CRC, CZK, DKK, DZD, EGP, EUR, GBP, GTQ, HKD, HNL, HUF, IDR, ILS, INR, ISK, JPY, KES, KHR, KRW, KWD, KZT, MAD, MOP, MXN, MYR, NGN, NIO, NOK, NZD, OMR, PEN, PHP, PHP, PKR, PLN, PYG, QAR, RON, RUB, SAR, SEK, SGD, THB, TRY, TWD, UAH, USD, VES, VND, ZAR | enum(string)                                                                                                                                       |
| value                  | Value of the order or items sold. Note: Price is the price for a single item, and value is the total price of the order. For example, if you have two items each sold for \$10, the price parameter would pass 10 and the value parameter would pass 20.                                                                                                                        | number                                                                                                                                             |
| price                  | The price of the item. Note: Price is the price for a single item, and value is the total price of the order. For example, if you have two items each sold for \$10, the price parameter would pass 10 and the value parameter would pass 20.                                                                                                                                   | number                                                                                                                                             |
| quantity               | The number of item(s).                                                                                                                                                                                                                                                                                                                                                          | number                                                                                                                                             |
| query                  | The text string that was input by a user. For instance, if a person searches for a product on your website, you can forward the keyword being searched. If a person enters a coupon code at check out, you can forward the code.                                                                                                                                                | string                                                                                                                                             |
| description            | Description of the item or page.                                                                                                                                                                                                                                                                                                                                                | string                                                                                                                                             |
| status                 | Status of an order, item, or service. Note: Depending on your use of 'status', Events API may be required in order to share status changes to TikTok.                                                                                                                                                                                                                           | string                                                                                                                                             |
