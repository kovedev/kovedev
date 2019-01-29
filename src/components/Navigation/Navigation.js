import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      { authUser =>
          authUser ? <NavigationAuth  authUser={authUser} /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <div className="NavBar">
    <NavLink to={ROUTES.HOME}>Home</NavLink>
    <NavLink to={ROUTES.ABOUT}>About</NavLink>
    <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
    <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
    )}
    <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <div className="NavBar">
    <NavLink to={ROUTES.HOME}>Home</NavLink>
    <NavLink to={ROUTES.ABOUT}>About</NavLink>
    <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
    <NavLink to={ROUTES.SIGN_IN}>Sign in</NavLink>
    {/* <NavLink to={ROUTES.ADMIN}>Admin</NavLink> */}
  </div>
);

export default Navigation;