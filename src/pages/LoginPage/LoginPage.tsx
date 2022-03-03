import React from 'react';

import TextField from '../../components/TextField';
import Button from '../../components/Button';

function LoginPage() {
  return (
    <>
      <TextField type={'text'} label='Email' />
      <TextField type={'password'} label='Password' />
      <Button name='Login' />
    </>
  );
}

export default React.memo(LoginPage);
