/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  const article = knex.schema.createTable('articles', (table)=> {
      table.increments('id').primary();
      table.string('heading', 255).notNullable().defaultTo('Untitled Article');
      table.string('content', 1000).notNullable();
      table.timestamps(true, true);
  });
  return article;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  const article = knex.schema.dropTable('articles')
  return article;
};
