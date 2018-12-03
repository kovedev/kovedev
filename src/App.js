import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import Navigation from './components/Navigation';

class App extends Component {
	render() {
		return (
				<div>
					<Navigation/>
					<Switch>
						<Route path='/kovedev/' component={Home} exact/>
						<Route path='/kovedev/about' component={About} />
						<Route path='/kovedev/contact' component={Contact} />
						<Route component={Error}/>
					</Switch>
				</div>
		);
	}
}

export default App;
