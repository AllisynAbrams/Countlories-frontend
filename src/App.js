import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar/NavBar'
import Team from './Team/Team'

function App() {
  return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/' />
				<Route exact path='/team'>
					<Team />
				</Route>
				<Route exact path='/about'>
					
				</Route>
			</Switch>
		</div>
	)
}

export default App;
