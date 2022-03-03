import React from 'react';

import { Typography } from '@mui/material';

import Form from '../../components/Form';
import './style.scss';

function LoginPage() {
  return (
    <div id="form-container">
      <Typography
        sx={{ mb: 1.5 }}
        color="textSecondary"
        align="center"
      >
        Log in
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="textSecondary"
        align="center"
      >
        Enter your email &#038; Password. If you don't have <br/>
        an account please see your email invitation
      </Typography>
      <Form/>
    </div>
  );
}

export default React.memo(LoginPage);
