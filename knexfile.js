module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/b2b-dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
