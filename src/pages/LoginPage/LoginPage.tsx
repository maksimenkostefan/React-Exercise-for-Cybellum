import React from 'react';

import TextField from '../../components/TextField';

function LoginPage() {
  return (
    <>
      <TextField label={'Email'} type={'text'} />
      <TextField label={'Password'} type={'password'} />
    </>
  );
}

export default React.memo(LoginPage);
