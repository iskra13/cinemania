import React, { FC } from "react";

import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./components/AppRoute/AppRoute";

import "./App.module.scss";

const App: FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <AppRoute />
    </React.Fragment>
  );
};

export default App;

// TODO page-movie & background
// TODO icons in side menu
// TODO MovieArt
// TODO хоть как то страницу юзера сделать
// TODO backend exprees  MVC (jwt prisma, sqllite, хранение фильмов)
