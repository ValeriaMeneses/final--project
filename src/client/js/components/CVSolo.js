import React from 'react';

export default class CVSolo extends React.Component{
  render(){
    return(
      <div className= "cvsolo">
        <div className="contenedor-cv">
          <div className="informacion">
            <ul id="tabs-swipe-demo" className="tabs blue">
              <li className="tab col s3"><a className="active" href="#test-swipe-1">Información Básica</a></li>
              <li className="tab col s3"><a href="#test-swipe-2">Formación Académica</a></li>
              <li className="tab col s3"><a href="#test-swipe-3">Experiencia Laboral</a></li>
              <li className="tab col s3"><a href="#test-swipe-4">Información Adicional</a></li>
              <li className="tab col s3"><a href="#test-swipe-5">Idiomas</a></li>
            </ul>
            <div id="test-swipe-1" className="col s12">
                <ul className="collapsible" data-collapsible="expandable">
                  <li>
                    <div className="collapsible-header"><i className="material-icons">perm_identity</i>Nombre(s)</div>
                    <div className="collapsible-body"><span>Valeria Irais</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">perm_identity</i>Apellido(s)</div>
                    <div className="collapsible-body"><span>Meneses Aguilar</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">wc</i>Sexo</div>
                    <div className="collapsible-body"><span>Femenino</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de nacimiento</div>
                    <div className="collapsible-body"><span>18-Febrero-1993</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">person_pin_circle</i>Direccion</div>
                    <div className="collapsible-body"><span>Av. Morelos no.12 San miguel Totolcingo, Acolman,...</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">phone</i>Telefono</div>
                    <div className="collapsible-body"><span>5565656565</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">email</i>E-mail</div>
                    <div className="collapsible-body"><span>vale@mail.com</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">filter_list</i>Categoria</div>
                    <div className="collapsible-body"><span>Ingenieria</span></div>
                  </li>
                </ul>
            </div>
            <div id="test-swipe-2" className="col s12">
              <ul className="collapsible" data-collapsible="expandable">
                <li>
                  <div className="collapsible-header"><i className="material-icons">location_city</i>Nombre de la Institución</div>
                  <div className="collapsible-body"><span>Muktek academy</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">school</i>Titulo adquirido</div>
                  <div className="collapsible-body"><span>Full stack en javascript</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de inicio</div>
                  <div className="collapsible-body"><span>Septiembre 2017</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de inicio</div>
                  <div className="collapsible-body"><span>Septiembre 2017</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de termino</div>
                  <div className="collapsible-body"><span>Diciembre 2017</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">school</i>No. de cedula</div>
                  <div className="collapsible-body"><span>123</span></div>
                </li>
              </ul>
            </div>
            <div id="test-swipe-3" className="col s12">
              <ul className="collapsible" data-collapsible="expandable">
                <li>
                  <div className="collapsible-header"><i className="material-icons">assignment_ind</i>Puesto</div>
                  <div className="collapsible-body"><span>Developer jr</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">transfer_within_a_station</i>Funciones</div>
                  <div className="collapsible-body"><span>Developer jr</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">domain</i>Empresa</div>
                  <div className="collapsible-body"><span>Google</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de inicio</div>
                  <div className="collapsible-body"><span>today</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de termino</div>
                  <div className="collapsible-body"><span>today</span></div>
                </li>
              </ul>
            </div>
            <div id="test-swipe-4" className="col s12">
              <ul className="collapsible" data-collapsible="expandable">
                <li>
                  <div className="collapsible-header"><i className="material-icons">insert_drive_file</i>Cursos</div>
                  <div className="collapsible-body"><span>Lorem isum</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">school</i>Seminarios</div>
                  <div className="collapsible-body"><span>Lorem isum</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">school</i>Diplomados</div>
                  <div className="collapsible-body"><span>Lorem isum</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">note</i>Otros</div>
                  <div className="collapsible-body"><span>Lorem isum</span></div>
                </li>
              </ul>
            </div>
            <div id="test-swipe-5" className="col s12">
              <ul className="collapsible" data-collapsible="expandable">
                <li>
                  <div className="collapsible-header"><i className="material-icons">record_voice_over</i>Idiomas</div>
                  <div className="collapsible-body"><span>Lorem isum</span></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="habilidades">
            <h5>Habilidades</h5>
            <div>
              <h6>Trabajo en equipo</h6>
              <div>
                <select className="browser-default">
                  <option value="" disabled selected>Selecionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                </select>
              </div>
            </div>
            <div>
              <h6>Liderazgo</h6>
              <div>
                <select className="browser-default">
                  <option value="" disabled selected>Selecionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                </select>
              </div>
            </div>
            <div>
              <h6>Conocimiento Tecnico</h6>
              <div>
                <select className="browser-default">
                  <option value="" disabled selected>Selecionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                </select>
              </div>
            </div>
            <div>
              <h6>Facilidad de comunicacion</h6>
              <div>
                <select className="browser-default">
                  <option value="" disabled selected>Selecionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                </select>
              </div>
            </div>
            <div>
              <h6>Creatividad</h6>
              <div>
                <select className="browser-default">
                  <option value="" disabled selected>Selecionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="notas">
            <h5>Notas</h5>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                  </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
