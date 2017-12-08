
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('curriculums', table => {
      table.increments();

      table.string('nombres');
      table.string('apellidos');
      table.enu('sexo', ['femenino', 'masculino']);
      table.date('fechaNacimiento');
      table.text('direccion');
      table.string('telefono');
      table.string('email');
      table.string('nombreInstituto');
      table.string('tituloAdquirido');
      table.date('fechaInicioEdu');
      table.date('fechaTerminoEdu');
      table.integer('cedula');
      table.string('puesto');
      table.text('funciones');
      table.string('empresa');
      table.date('fechaInicioExp');
      table.date('fechaTerminoExp');
      table.text('cursos');
      table.text('seminarios');
      table.text('diplomados');
      table.text('publicaciones');
      table.text('otros');
      table.string('idiomas');
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('job');
};
