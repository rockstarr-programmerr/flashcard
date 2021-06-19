const development = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'fc_db',
  dialect: 'mysql'
}

const test = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'fc_db',
  dialect: 'mysql'
}

const production = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'fc_db',
  dialect: 'mysql'
}

module.exports = {
  development,
  test,
  production
}
