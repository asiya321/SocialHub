import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "redux/store";

export interface IUserState {
  token: string;
  fullName?: string;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  token: "",
  isLoggedIn: false,
};

interface IPayload {
  isLoggedIn: boolean;
  token: string;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action: IAction) => {
      const newState = state;
      newState.isLoggedIn = action.payload.isLoggedIn;
      newState.token = action.payload.token;
    },
  },
});

export const { setUserCredential } = authSlice.actions;

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return {
    setUserCredential: (payload: IPayload) =>
      dispatch(setUserCredential(payload)),
  };
};
const { reducer } = authSlice;
export default reducer;
