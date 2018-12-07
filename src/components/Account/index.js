import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <div className="App">
    <div className="PageName">Account: {/* authUser.email */}</div>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default AccountPage;