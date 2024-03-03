import Loadable from "react-loadable";

import { Spinner } from "components/Loader";

export const Login = Loadable({
  loader: () => import("pages/Auth/Login"),
  loading: () => <Spinner />,
});

export const LandingPage = Loadable({
  loader: () => import("pages/LandingPage"),
  loading: () => <Spinner />,
});
