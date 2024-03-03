import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import useUserInfo from "hooks/useUserInfo";
import { Route, Routes } from "react-router-dom";
import * as AdminLoadable from "./ScreenContainer/AdminLoad";
import * as AuthLoadable from "./ScreenContainer/AuthLoad";
import AppRoutes from "./appRoutes";

function Application() {
  const { isLoggedIn } = useUserInfo();

  return (
    <Routes>
      {isLoggedIn ? (
        <Route element={<ProtectedRoute />}>
          <Route
            element={<AdminLoadable.Dashboard />}
            path={AppRoutes.DASHBOARD}
          />
        </Route>
      ) : null}

      {/* <Route element={<AuthLoadable.Login />} path={AppRoutes.LOGIN} /> */}
      <Route
        element={<AuthLoadable.LandingPage />}
        path={AppRoutes.LANDINGPAGE}
      />
    </Routes>
  );
}

export default Application;
