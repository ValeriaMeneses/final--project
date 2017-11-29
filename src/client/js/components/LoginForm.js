import React from 'react';

export default class LoginForm extends React.Component{
  render() {
    return (
      <div className="password" >
          <form className="col s12">
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input type="text" className="validate" />
                <label htmlFor="icon_prefix">e-mail</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" className="validate" />
                <label htmlFor="icon_prefix">Contraseña</label>
              </div>
            </div><br/>
            <a class="waves-effect waves-light btn">Entrar</a><br/><br/>
            <a class="waves-effect waves-light btn"><i class="material-icons right">account_box</i>Registrarse</a>
          </form>
      </div>
    )
  }
}
