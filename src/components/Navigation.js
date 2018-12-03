import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return( 
    <div className="NavBar">
      <NavLink to='/kovedev/'>Home</NavLink>
      <NavLink to='/kovedev/about/'>About</NavLink>
      <NavLink to='/kovedev/contact/'>Contact</NavLink>
      <NavLink to='/kovedev/topic/'>Topic</NavLink>
    </div>
	);
}

export default Navigation;