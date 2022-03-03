import React from "react";

import { TextField as BaseTextField, Typography } from '@mui/material';

type Props = {
  type: string;
  label: string
};

function TextField({ type, label }: Props) {
  return (
    <>
      <Typography
      >
        {label}
      </Typography>
      <BaseTextField type={type} variant="outlined" />
    </>
  );
}


export default React.memo(TextField);
