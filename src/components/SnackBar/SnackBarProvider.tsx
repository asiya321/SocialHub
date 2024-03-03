/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 */
import { AlertColor } from "@mui/material/Alert";
import { useMemo, useState } from "react";
import SnackBar from "./SnackBarComponent";

import SnackBarContext from "./SnackBarContext";

export type VariantTypes = "success" | "warning" | "error";

export type ShowParams = {
  title: string;
  type: AlertColor;
};

interface ProviderState {
  open: boolean;
  title: string;
  type?: AlertColor;
}

export interface SnackBarContextType {
  show: (params: ShowParams) => void;
}

const DEFAULT_STATE = {
  open: false,
  title: "",
};

interface ISnackBarProvider {
  children: JSX.Element;
}

// eslint-disable-next-line react/function-component-definition
const SnackBarProvider = (props: ISnackBarProvider) => {
  const { children } = props;

  const [state, setState] = useState<ProviderState>(DEFAULT_STATE);

  const show = (params: ShowParams) => {
    setState(() => ({ ...DEFAULT_STATE, ...params, open: true }));
  };

  const handleClose = () => {
    setState((v) => ({ ...v, open: false }));
  };

  const context = useMemo(() => ({ show }), [show]);

  return (
    <>
      <SnackBarContext.Provider value={context}>
        {children}
      </SnackBarContext.Provider>
      <SnackBar
        handleClose={handleClose}
        open={state.open}
        title={state.title}
        type={state.type || "success"}
      />
    </>
  );
};

export default SnackBarProvider;
