import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => {
	return( 
    <div className="NavBar">
      <NavLink to={ROUTES.HOME}>Home</NavLink>
      <NavLink to={ROUTES.ABOUT}>About</NavLink>
      <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
      <NavLink to={ROUTES.SIGN_IN}>Sign in</NavLink>
      <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
    </div>
	);
}

export default Navigation;