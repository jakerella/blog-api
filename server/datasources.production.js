module.exports = {
  'db': {
    'name': 'db',
    'connector': 'mongodb',
    'host': process.env.BLOG_DB_HOST || null,
    'port': process.env.BLOG_DB_PORT || 23398,
    'database': process.env.BLOG_DB_NAME || null,
    'username': process.env.BLOG_DB_USER || 'admin',
    'password': process.env.BLOG_DB_PASS || '*****'
  }
};
