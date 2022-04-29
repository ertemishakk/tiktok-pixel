let debug = false;
let initialized = false;

const warn = (...args) => {
  if (!debug) {
    return;
  }
  // eslint-disable-next-line no-console
  console.info(...['[tiktok-pixel]'].concat(args));
};

const verifyInit = () => {
  if (!initialized) {
    warn(
      'Pixel not initialized before using call tiktokPixel.init with required params',
    );
  }
  return initialized;
};

const log = (...args) => {
  if (!debug) {
    return;
  }
  // eslint-disable-next-line no-console
  console.info(...['[tiktok-pixel]'].concat(args));
};

const loadLibrary = (w, d, t, pixelId, advancedMatching, options) => {
  w.TiktokAnalyticsObject = t;
  var ttq = (w[t] = w[t] || []);
  ttq.methods = [
    'page',
    'track',
    'identify',
    'instances',
    'debug',
    'on',
    'off',
    'once',
    'ready',
    'alias',
    'group',
    'enableCookie',
    'disableCookie',
  ];
  ttq.setAndDefer = function(t, e) {
    t[e] = function() {
      t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };

  for (var i = 0; i < ttq.methods.length; i++)
    ttq.setAndDefer(ttq, ttq.methods[i]);
  ttq.instance = function(t) {
    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
      ttq.setAndDefer(e, ttq.methods[n]);
    return e;
  };
  ttq.load = function(e, n) {
    var i = 'https://analytics.tiktok.com/i18n/pixel/events.js';
    ttq._i = ttq._i || {};
    ttq._i[e] = [];
    ttq._i[e]._u = i;
    ttq._t = ttq._t || {};
    ttq._t[e] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[e] = n || {};
    var o = document.createElement('script');
    o.type = 'text/javascript';
    o.async = !0;
    o.src = i + '?sdkid=' + e + '&lib=' + t;
    var a = document.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(o, a);
  };
  if (!pixelId) {
    warn('Please insert pixel id for initializing');
  } else {
    ttq.load(pixelId);
    ttq.identify(advancedMatching);
    ttq.page();
    initialized = true;
    debug = options.debug;
  }
};

const defaultOptions = {
  debug: false,
};

const TiktokPixel = {
  async init(pixelId, advancedMatching = {}, options = defaultOptions) {
    initialized = typeof window !== 'undefined' && !!window.ttq;
    if (!initialized) {
      loadLibrary(window, document, 'ttq', pixelId, advancedMatching, options);
    }
  },
  pageView() {
    const ttq = getLibrary();
    ttq.page();
  },

  track(event, data, options = {}) {
    if (!verifyInit()) {
      return;
    }

    if (!event) {
      log(`please specificy an event name`);
    }

    const ttq = getLibrary();

    ttq.track(event, data, options);

    if (debug) {
      log(`called ttq.track('${event}')`, data, options);

      if (data) {
        log('with data', data, options);
      }
    }
  },
};

const getLibrary = () => {
  return window.ttq;
};

export default TiktokPixel;
