// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// const dotenv = require('dotenv').config();
// const {DB_NAME, DB_PASSWORD, DB_USER, DB_PORT, DB_HOST} = process.env;
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: `5432`,
      host: `article_postgres`,
      database: `nasctech`,
      user: `postgres`,
      password: `postgres`,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
