import React from 'react';

export default class PrincipalPage extends React.Component{
  render(){
    return(
      <div className="principalPage row">
        <div className="cvs col s4">
          <button className="waves-effect " type="submit" name="action">
            <i className="material-icons">folder_shared</i>
            <br/>
            Curriculums Vitae
          </button>
        </div>
        <div className="categorias col s4">
          <button className="waves-effect " type="submit" name="action">
            <i className="material-icons">filter_list</i>
            <br/>
            Categorias
          </button>
        </div>
        <div className="entrevista col s4">
          <button className="waves-effect " type="submit" name="action">
            <i className="material-icons">assignment_ind</i>
            <br/>
            Entrevista
          </button>
        </div>
      </div>
    )
  }
}
