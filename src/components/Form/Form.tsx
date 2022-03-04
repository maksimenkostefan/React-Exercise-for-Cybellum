import React from "react";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Button, TextField } from '@mui/material';

import { requestLogin } from '../../redux/actions/actionCreators';
import Text from "../Text/Text";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(requestLogin(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Text size={13} weight={500} color='#707986'>
        Username
      </Text>
      <TextField
        sx={{
          height: 45,
          width: 400,
          marginBottom: 7,
        }}
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <Text size={13} weight={500} color='#53616A'>
        Password
      </Text>
      <TextField
        sx={{
          height: 45,
          width: 400,
        }}
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        
        id="login-button"
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
