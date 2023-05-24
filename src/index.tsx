let debug = false;
let initialized = false;

const warn = (...args: any) => {
  if (!debug) {
    return;
  }
  console.info(...['[tiktok-pixel]'].concat(args));
};

const verifyInit = () => {
  if (!initialized) {
    warn(
      'Pixel not initialized before using call tiktokPixel.init with required params'
    );
  }
  return initialized;
};

const log = (...args: any) => {
  if (!debug) {
    return;
  }
  console.info(...['[tiktok-pixel]'].concat(args));
};

const loadLibrary = (
  w: Window,
  t: string,
  pixelId: string,
  advancedMatching: AdvancedMatching,
  options: DebugOptions
) => {
  (w as any).TiktokAnalyticsObject = t;
  var ttq = ((w as any)[t] = (w as any)[t] || []);
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
  ttq.setAndDefer = function(t: any, e: any) {
    t[e] = function() {
      t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };

  for (var i = 0; i < ttq.methods.length; i++)
    ttq.setAndDefer(ttq, ttq.methods[i]);
  ttq.instance = function(t: any) {
    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
      ttq.setAndDefer(e, ttq.methods[n]);
    return e;
  };
  ttq.load = function(e: string, n: any) {
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
    a?.parentNode?.insertBefore(o, a);
  };
  if (!pixelId) {
    warn('Please insert pixel id for initializing');
  } else {
    ttq.load(pixelId);
    ttq.identify(advancedMatching);
    ttq.page();
    initialized = true;
    debug = options.debug!;
  }
};

const defaultOptions = {
  debug: false,
};

const TiktokPixel = {
  async init(pixelId: string, advancedMatching = {}, options = defaultOptions) {
    initialized = typeof window !== 'undefined' && !!(window as any).ttq;
    if (!initialized) {
      loadLibrary(window, 'ttq', pixelId, advancedMatching, options);
    }
  },
  
  pageView() {
    if (!verifyInit()) {
      return;
    }

    const ttq = getLibrary();
    ttq.page();
  },

  track(event: TiktokEvent, data: TiktokParams, options: DebugOptions = {}) {
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
  return (window as any).ttq;
};

export default TiktokPixel;
