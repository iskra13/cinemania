import { Routes, Route } from "react-router-dom";

import { ErrorPage, SingupPage, SigninPage, MoviePage, UserPage, MainPage } from "../../pages";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SingupPage />} />
      <Route path="/:id" element={<MoviePage />} />
      <Route path="/user" element={<PrivateRoute />}>
        <Route path="/user" element={<UserPage />} />
      </Route>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoute;
