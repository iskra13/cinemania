import { Routes, Route } from "react-router-dom";

import SigninPage from "../pages/SigninPage/SigninPage";
import SingupPage from "../pages/SingupPage/SingupPage";
import MainPage from "../pages/MainPage/MainPage";
import UserPage from "../pages/UserPage/UserPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SingupPage />} />
      <Route path="/user" element={<PrivateRoute />}>
        <Route path="/user" element={<UserPage />} />
      </Route>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoute;
