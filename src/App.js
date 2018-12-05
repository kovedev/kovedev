import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignInPage from './components/SignIn/SignIn';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import SignUpPage from './components/SignUp/SignUp';
import PasswordForgetPage from './components/PasswordForget/PasswordForgot';
import AccountPage from './components/Account/Account';
import AdminPage from './components/Admin/Admin';

import * as ROUTES from './constants/routes';
import { withFirebase } from './components/Firebase';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authUser: null,
		}
	}

	componentDidMount(){
		this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser
				? this.setState({ authUser })
				: this.setState({ authUser: null });
		});
	}

	componentWillUnmount() {
		this.listener();
	}

	render() {
		return (
			<div>
				<Navigation authUser={this.state.authUser} />
				<Switch>
					<Route path={ROUTES.HOME} component={Home} exact/>
					<Route path={ROUTES.ABOUT} component={About} />
					<Route path={ROUTES.CONTACT} component={Contact} />
					<Route path={ROUTES.SIGN_IN} component={SignInPage} />
					<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
					<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
					<Route path={ROUTES.ACCOUNT} component={AccountPage} />
					<Route path={ROUTES.ADMIN} component={AdminPage} />
					<Route component={Error}/>
				</Switch>
			</div>
		);
	}
}

export default withFirebase(App);