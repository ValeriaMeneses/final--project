import React from 'react';

export default class Category extends React.Component{
  render(){
    return(
      <div className = "categories">
        <div className="btn-category">
          <a className="btn-floating btn-large waves-effect waves-light blue btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Graficas"><i className="material-icons">insert_chart</i></a>
          <a className="btn-floating btn-large waves-effect waves-light blue btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Agregar Categoria"><i className="material-icons">add</i></a>
        </div>
        <div className="category">
          <a className="waves-effect waves-light blue darken-2 btn">Administrativos</a>
          <a className="waves-effect waves-light blue darken-2 btn">Contabilidad</a>
          <a className="waves-effect waves-light blue darken-2 btn">Ingenieria</a>
          <a className="waves-effect waves-light blue darken-2 btn">Tecnologias de la informacion</a>
          <a className="waves-effect waves-light blue darken-2 btn">Recursos Humanos</a>
          <a className="waves-effect waves-light blue darken-2 btn">Ventas</a>
          <a className="waves-effect waves-light blue darken-2 btn">Marketing</a>
        </div>
      </div>
    )
  }
}
