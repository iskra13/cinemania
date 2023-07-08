import { FC, Fragment } from "react";

import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./approute/AppRoute";

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
