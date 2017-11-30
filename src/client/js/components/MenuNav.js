import React from 'react';

export default class MenuNav extends React.Component{
  render(){
    return(
        <nav className="menu">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">import_contacts</i>CV's</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#"><i className="material-icons">home</i>Home</a></li>
              <li><a href="#"><i className="material-icons">folder_shared</i>CV's</a></li>
              <li><a href="#"><i className="material-icons">filter_list</i>Categorias</a></li>
              <li><a href="#"><i className="material-icons">assignment_ind</i>Entrevista</a></li>
              <li><a href="#"><i className="material-icons">lock</i>Cerrar sesión</a></li>
            </ul>
          </div>
        </nav>
    )
  }
}
