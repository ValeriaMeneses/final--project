import React from 'react';

export default class FiltroCVs extends React.Component{
  render(){
    return(
      <div className="filtros">
        <div className="ftrs">
          <a href="#!" className="btn" onclick="Materialize.showStaggeredList('#staggered-test')">Todos los CV's</a>
          <a href="#!" className="btn" onclick="Materialize.showStaggeredList('#staggered-test')">CV's entrevistados</a>
          <a href="#!" className="btn" onclick="Materialize.showStaggeredList('#staggered-test')">CV's para entrevista</a>
        </div>
      </div>
    )
  }
}
