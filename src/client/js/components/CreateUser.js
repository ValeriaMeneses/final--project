import React from 'react';

export default class CreateUser extends React.Component{
  render() {
    return(
      <div className="createUser" >
          <form className="col s12">
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">perm_identity</i>
                <input type="text" className="validate" />
                <label htmlFor="icon_prefix">Nombre (s)</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">perm_identity</i>
                <input type="text" className="validate" />
                <label htmlFor="icon_prefix">Apellidos</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input type="text" className="validate" />
                <label htmlFor="icon_prefix">E-mail</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" className="validate" />
                <label htmlFor="icon_prefix">Contraseña</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" className="validate" />
                <label htmlFor="icon_prefix">Verificar Contraseña</label>
              </div>
            </div><br/>
            <button className="btn waves-effect waves-light" type="submit" name="action">Registrar
              <i className="material-icons right">send</i>
            </button>
          </form>
      </div>
    )
  }
}
