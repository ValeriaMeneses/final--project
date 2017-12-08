
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('notes', table => {
      table.increments();

      table.text('note');
      table.integer('trabajoEquipo');
      table.integer('liderazgo');
      table.integer('conocimientoTecnico');
      table.integer('facilidadComunicacion');
      table.integer('creatividad');
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('notes');
};
