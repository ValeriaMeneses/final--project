import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import request from 'superagent';
import { Redirect } from 'react-router-dom';

export default class MenuNav extends React.Component{
  constructor(){
    super();

    this.logOut = this.logOut.bind(this);
  }
  logOut(){
    request
      .get('/auth/logout')
      .then(()=>{
        console.log('logout!');
        this.props.handleLogout();
      })
      .catch(err => console.log(err))
  }
  render(){
    if (this.props.isAuthenticated === false) {
      
      // return <Redirect to='/login' />
    }
    return(
        <nav className="menu">
          <div className="nav-wrapper">
            <Link to="/principalPage" className="brand-logo"><i className="material-icons">import_contacts</i>CVs</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/principalPage" className="tooltipped" data-delay="50" data-tooltip="Home"><i className="material-icons">home</i></Link></li>
              <li><Link to="/cv-form" className="tooltipped" data-delay="50" data-tooltip="Agregar CV"><i className="material-icons">description</i></Link></li>
              <li><Link to="/filtros" className="tooltipped" data-delay="50" data-tooltip="CV's"><i className="material-icons">folder_shared</i></Link></li>
              <li><Link to="/categories/categories" className="tooltipped" data-delay="50" data-tooltip="Categorias"><i className="material-icons">filter_list</i></Link></li>
              <li><Link to="/dinamic/cv" className="tooltipped" data-delay="50" data-tooltip="Entrevista"><i className="material-icons">assignment_ind</i></Link></li>
              <li><button className="tooltipped" data-delay="50" data-tooltip="Cerrar sesion" onClick={this.logOut}><i className="material-icons">lock</i></button></li>
            </ul>
          </div>
        </nav>
    )
  }
}
