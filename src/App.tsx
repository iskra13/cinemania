import { FC, Fragment } from "react";

import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./components/AppRoute/AppRoute";

import "./App.module.scss";

const App: FC = () => {
  return (
    <Fragment>
      <NavBar />
      <AppRoute />
    </Fragment>
  );
};

export default App;
