import React from "react";
import SnackbarContext from "./SnackBarContext";

export default function useSnackbar() {
  return React.useContext(SnackbarContext);
}
