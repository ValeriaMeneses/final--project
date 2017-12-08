const categoryDataRows = [
  {
    categorias:'Administracion'
  },
  {
    categorias:'Contabilidad'
  },
  {
    categorias:'Ingenieria'
  },
  {
    categorias:'Tecnologias de la informacion'
  },
  {
    categorias:'Recursos Humanos'
  },
  {
    categorias:'Ventas'
  },
  {
    categorias:'Marketing'
  }

];

exports.seed = function(knex, Promise) {
  return knex('category')
    .del()
    .then(() => {
      return knex('category')
        .insert(categoryDataRows);
    });
}
