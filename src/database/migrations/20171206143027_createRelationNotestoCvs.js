
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('notes', table => {
      table
        .integer('curriculumsId')
        .unsigned()
        .references('id')
        .inTable('curriculums');

      return table;
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('notes', table => {
      table
        .dropForeingn('curriculumsId')
      table
        .dropTableIfExists('curriculumsId')
    })
};
