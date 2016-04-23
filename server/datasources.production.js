module.exports = {
  'db': {
    'name': 'db',
    'connector': 'mongodb',
    'host': 'ds023398.mlab.com',
    'port': 23398,
    'database': 'tiy-blog',
    'username': 'tiy-blog-api',
    'password': process.env.TIY_BLOG_PASS || ''
  }
};
