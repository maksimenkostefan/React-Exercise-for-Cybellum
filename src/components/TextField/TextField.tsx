import React from "react";

import { TextField as BaseTextField } from '@mui/material';

type Props = {
  label: string;
  type: string;
};

function TextField({ label, type }: Props) {
  return (
    <BaseTextField label={label} type={type} variant="outlined" />
  );
}


export default React.memo(TextField);
