import { Spinner } from "components/Loader";
import Loadable from "react-loadable";

export const Dashboard = Loadable({
  loader: () => import("pages/Admin/Dashboard"),
  loading: () => <Spinner />,
});
