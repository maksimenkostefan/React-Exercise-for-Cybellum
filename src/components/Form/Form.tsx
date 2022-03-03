import React from "react";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { requestLogin } from '../../redux/actions/actionCreators';

import { Button, TextField, Typography } from '@mui/material';

function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(requestLogin(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography
        color="textSecondary"
      >
        Email
      </Typography>
      <TextField
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Typography
        color="textSecondary"
      >
        Password
      </Typography>
      <TextField
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default React.memo(LoginForm);
