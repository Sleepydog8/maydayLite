module.exports = {
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: 'mayday',
  entities: ['src/entity/*.js'],
  logging: true,
  synchronize: true,
}
