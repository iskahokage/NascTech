// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const dotenv = require('dotenv').config();
const {DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_USER} = process.env;
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: `nasctech`,
      user: `postgres`,
      password: `1`
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
