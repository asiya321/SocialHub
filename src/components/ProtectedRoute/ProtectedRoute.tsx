import useUserInfo from "hooks/useUserInfo";
import AppRoutes from "navigation/appRoutes";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoggedIn } = useUserInfo();
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate state={{ path: location.pathname }} to={AppRoutes.LOGIN} />
  );
}
