import React from "react";

import { ITextProps } from "../../types/types";

function Text(props: ITextProps) {
  const { children, size, weight, color, opacity } = props;

  return (
    <div 
      style={{
        fontSize: size,
        fontWeight: weight,
        color: color,
        opacity: opacity
      }}
    >
      {children}
    </div>
  );
}


export default React.memo(Text);
