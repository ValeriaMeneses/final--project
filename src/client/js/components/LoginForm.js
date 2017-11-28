import React from 'react';

export default class LoginForm extends React.Component{
  render() {
    return (
      <div className="password" >
          <form className="col s12">
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input type="text" className="validate" />
                <label htmlFor="icon_prefix">Usuario</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" className="validate" />
                <label htmlFor="icon_prefix">Password</label>
              </div>
            </div>
          </form>
      </div>
    )
  }
}
