
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tiktok-pixel.cjs.production.min.js')
} else {
  module.exports = require('./tiktok-pixel.cjs.development.js')
}
