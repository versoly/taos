import React from "react";
import useTaos from "./useTaos";

const TAOS = ({ as = "span", children, offset = 0, ...props }) => {
  const As = as;
  const ref = useTaos({ className: props.className, offset });

  return (
    <As ref={ref} {...props} data-taos-offset={offset}>
      {children}
    </As>
  );
};

TAOS.displayName = "TAOS";
export { TAOS };
