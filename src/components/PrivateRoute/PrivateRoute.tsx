import { Outlet, Navigate } from "react-router-dom";

import { useUserAuth } from "../../hooks/useUserAuth";

const PrivateRoute = () => {
  const { isAuth } = useUserAuth();

  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
