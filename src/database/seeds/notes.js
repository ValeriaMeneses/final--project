const notesDataRows = [
  {
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    trabajoEquipo: 10,
    liderazgo: 9,
    conocimientoTecnico:8,
    facilidadComunicacion: 10,
    creatividad:8,
  },
  {
    note: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    trabajoEquipo: 9,
    liderazgo: 9,
    conocimientoTecnico:8,
    facilidadComunicacion: 8,
    creatividad:8,
  }
];

exports.seed = function(knex, Promise) {
  return knex('notes')
    .del()
    .then(() => {
      return knex('notes')
        .insert(notesDataRows);
    });
}
