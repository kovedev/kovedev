import React from 'react';

import { withAuthorization } from '../Session';

const Home = () => {
	return(
		<div className="App">
			<div className="PageName">
				Home
			</div>
			<div>
				You are logged in
			</div>
		</div>
	);
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);