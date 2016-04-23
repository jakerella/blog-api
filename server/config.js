module.exorts = {
  'restApiRoot': '/api',
  'host': process.env.TIY_BLOG_HOST || '0.0.0.0',
  'port': process.env.TIY_BLOG_PORT || 3000,
  'remoting': {
    'context': {
      'enableHttpContext': false
    },
    'rest': {
      'normalizeHttpPath': false,
      'xml': false
    },
    'json': {
      'strict': true,
      'limit': '100kb'
    },
    'urlencoded': {
      'extended': true,
      'limit': '100kb'
    },
    'cors': {
      'params': {
        'origin': true,
        'credentials': true,
        'maxAge': 86400
      }
    },
    'errorHandler': {
      'disableStackTrace': true
    }
  },
  'legacyExplorer': false
};
