import React from 'react';

export default class NewCategory extends React.Component{
  render(){
    return(
      <div className="newCategory">
        <form className="col s12">
          <div className="row ">
            <div className="input-field col s6">
              <i className="material-icons prefix">filter_list</i>
              <input type="text" className="validate" />
              <label htmlFor="icon_prefix">Nueva Categoria</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Registrar
            <i className="material-icons right">send</i>
          </button>
        </form>
        <form className="col s12">
          <div className="row select">
            <label>Categoria</label>
            <select className="browser-default">
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Administracion</option>
              <option value="2">Contabilidad</option>
              <option value="3">Ingenieria</option>
              <option value="4">Recursos Humanos</option>
            </select>
          </div>
          <div className="row ">
            <div className="input-field col s6">
              <i className="material-icons prefix">filter_list</i>
              <input type="text" className="validate" />
              <label htmlFor="icon_prefix">Nueva Categoria</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Registrar
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}
