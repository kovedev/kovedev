import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div onClick={firebase.doSignOut}>
    {// eslint-disable-next-line
    <a href="#">Sign out</a>
    }
  </div>
);

export default withFirebase(SignOutButton);