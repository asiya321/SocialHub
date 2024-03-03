import React from "react";

import { SnackBarContextType } from "./SnackBarProvider";

const SnackBarContext = React.createContext<SnackBarContextType | undefined>(
  undefined,
);
export default SnackBarContext;
