import React from "react";

import { Button as BaseButton } from '@mui/material';

type Props = {
  name: string;
};

function Button({ name }: Props) {
  return (
    <BaseButton variant="contained">{name}</BaseButton> 
  );
}


export default React.memo(Button);
