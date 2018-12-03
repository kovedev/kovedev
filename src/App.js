import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Topic from './components/Topic';

class App extends Component {
	render() {
		return (
				<div>
					<Navigation/>
					<Switch>
						<Route path='/kovedev/' component={Home} exact/>
						<Route path='/kovedev/about/' component={About} />
						<Route path='/kovedev/contact/' component={Contact} />
						<Route path='/kovedev/topic/' component={Topic} exact/>
						<Route path='/kovedev/topic/:id' component={Topic} />
						<Route component={Error}/>
					</Switch>
				</div>
		);
	}
}

export default App;
