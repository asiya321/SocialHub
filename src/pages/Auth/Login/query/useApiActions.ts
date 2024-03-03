/* eslint-disable @typescript-eslint/naming-convention */
import useSnackBar from "components/SnackBar/useSnackBar";
import ErrorMessages from "constants/errorMessages";
import { ILogin } from "interfaces/auth";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "redux/user/auth";

const useAPIActions = () => {
  const snackbar = useSnackBar();
  const navigate = useNavigate();
  const { setUserCredential } = useAuthActions();

  const tryLogin = async (values: ILogin) => {
    try {
      // const response: any = await login(values); // login service
      const Credentials = {
        email: "admin@gmail.com",
        password: "123456",
      };

      const successful_response = { statusCode: 200, data: "token" };
      const badRequest_response = {
        statusCode: 200,
        data: "Something went wrong",
      };

      const response: any =
        values === Credentials ? successful_response : badRequest_response;

      if (response.statusCode === 200) {
        setUserCredential({
          token: response.data,
          isLoggedIn: true,
        });
        navigate(AppRoutes.DASHBOARD);
        snackbar?.show({
          title: ErrorMessages.LOGIN.SUCCESS,
          type: "success",
        });
      }
      return true;
    } catch (err: any) {
      const msg = err.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
      return false;
    }
  };
  return {
    tryLogin,
  };
};

export { useAPIActions };
