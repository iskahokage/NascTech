// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const dotenv = require('dotenv').config();
const {DB_NAME, DB_PASSWORD, DB_USER} = process.env;
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: `${DB_NAME}`,
      user: `${DB_USER}`,
      password: `${DB_PASSWORD}`
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
