import React from 'react';
import { Slider, Slide, Modal, Button } from 'react-materialize';
import {Link, NavLink} from 'react-router-dom';



export default class Presentacion extends React.Component{
  render(){
    return(
      <div className="carrusel">
      <Modal
      	header='Iniciar sesion'
      	fixedFooter
      	trigger={<Button>Iniciar sesion</Button>}>
        <div className="" >
            <form className="col s12">
              <div className="row ">
                <div className="input-field col s6">
                  <i className="material-icons prefix">email</i>
                  <input type="text" ref = "email" className="validate" />
                  <label htmlFor="icon_prefix">e-mail</label>
                </div>
              </div>
              <div className="row ">
                <div className="input-field col s6">
                  <i className="material-icons prefix">lock</i>
                  <input type="password" ref="password" className="validate" />
                  <label htmlFor="icon_prefix">Contraseña</label>
                </div>
              </div><br/>
              <a className="waves-effect waves-light btn" onClick={this._handleSubmit}>Entrar</a><br/><br/>
              <Link to="/createUser" className="waves-effect waves-light btn"><i className="material-icons right">account_box</i>Registrarse</Link>
            </form>
        </div>
      </Modal>
        <Slider>
          <Slide
          src="/images/11.jpg"
          title="CVEntrevistado">

          </Slide>
          <Slide
          src="/images/19.jpg"
          title="Optimizar"
          placement="left">
          </Slide>
          <Slide
          src="/images/10.jpg"
          title="Mantener"
          placement="right">

          </Slide>
          <Slide
          src="/images/25.jpg"
          title="Controlar"
          placement="left">

          </Slide>
        </Slider>
      </div>
    )
  }
}
