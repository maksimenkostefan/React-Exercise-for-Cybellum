import React from 'react';

import TextField from '../../components/TextField';
import Button from '../../components/Button';

function LoginPage() {
  return (
    <>
      <TextField label={'Email'} type={'text'} />
      <TextField label={'Password'} type={'password'} />
      <Button name='Login' />
    </>
  );
}

export default React.memo(LoginPage);
