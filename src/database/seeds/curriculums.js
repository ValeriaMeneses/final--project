const CVdataRows=[
  {
    nombres:'valeria',
    apellidos:'meneses',
    sexo:'femenino',
    fechaNacimiento:'1993-02-18',
    direccion:'Av. morelos 12 totolandia',
    telefono: '2222222222',
    email:'val@mail.com',
    nombreInstituto:'UTTEC',
    tituloAdquirido:'biotecnologia',
    fechaInicioEdu:'2012-01-22',
    fechaTerminoEdu:'2015-10-22',
    cedula:'123456',
    puesto:'tec laboratorista',
    funciones:'extraccion de adn',
    empresa:'CIMMIT',
    fechaInicioExp:'2014-08-22',
    fechaTerminoExp:'2015-08-22',
    cursos:'hambiental, otro, otro',
    seminarios:'otro, otro, otro',
    diplomados:'ninguno',
    publicaciones:'nada',
    otros:'otro',
    idiomas:'ingles'
  },
  {
    nombres:'oscar',
    apellidos:'aguilar',
    sexo:'masculino',
    fechaNacimiento:'1990-12-22',
    direccion:'Av. morelos 12 Totolcingo',
    telefono: '5555555555',
    email:'oscar@mail.com',
    nombreInstituto:'UTTEC',
    tituloAdquirido:'administracion',
    fechaInicioEdu:'2012-01-22',
    fechaTerminoEdu:'2015-10-22',
    cedula:'123456',
    puesto:'recursos humanos',
    funciones:'reclutacion',
    empresa:'FITSA',
    fechaInicioExp:'2014-08-22',
    fechaTerminoExp:'2015-08-22',
    cursos:'admon, otro, otro',
    seminarios:'admon, otro, otro',
    diplomados:'ninguno',
    publicaciones:'nada',
    otros:'otro',
    idiomas:'ingles'
  },
  {
    {
      nombres:'jose',
      apellidos:'perez',
      sexo:'masculino',
      fechaNacimiento:'1989-09-22',
      direccion:'Av. del trabajo 12 Texcoco',
      telefono: '5599999555',
      email:'jose@mail.com',
      nombreInstituto:'UNAM',
      tituloAdquirido:'contabilidad',
      fechaInicioEdu:'1999-01-22',
      fechaTerminoEdu:'2001-10-22',
      cedula:'109456',
      puesto:'contador',
      funciones:'contar',
      empresa:'Patito',
      fechaInicioExp:'2014-08-22',
      fechaTerminoExp:'2015-04-22',
      cursos:'conta, otro, otro',
      seminarios:'conta, otro, otro',
      diplomados:'ninguno',
      publicaciones:'nada',
      otros:'otro',
      idiomas:'ingles'
    }
  }
];

exports.seed = function(knex, Promise) {
  return knex('curriculums')
    .del()
    .then(() => {
      return knex('curriculums')
        .insert(CVdataRows);
    });
}
