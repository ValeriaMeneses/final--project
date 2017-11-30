import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Button, Icon} from 'react-materialize';

export default () => (
	<Button waves='light'>
		<Icon>thumb_up</Icon>
	</Button>
);

import LoginForm from './components/LoginForm.js';
import CreateUser from './components/CreateUser.js';
import PrincipalPage from './components/PrincipalPage.js';
import MenuNav from './components/MenuNav.js';
import CVForm from './components/CVForm.js';
import Category from './components/Category.js'


const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return 		<Button waves='light'>button<Icon left>cloud</Icon></Button>
}

const NoMatch404 = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>No Match - 404</h2>
}

class App extends React.Component {
  render (){
    return <div>
      <Switch>
        <Route path='/ex/:routeVal' component={DynamicRoute}/>
        <Route path='/demo' component={DemoComponent}/>
				<Route path='/login' component={LoginForm}/>
				<Route path='/createUser' component={CreateUser}/>
				<Route path='/principalPage' component={PrincipalPage}/>
				<Route path='/menu' component={MenuNav}/>
				<Route path='/cv-form' component={CVForm}/>
				<Route path='/categories' component={Category}/>
        <Route component={NoMatch404}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
