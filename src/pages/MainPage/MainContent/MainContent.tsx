import { FC } from "react";

import MainLayout from "../../../components/Layouts/MainLayout/MainLayout";
import MainMoviePagination from "../../../components/MainMoviePagination/MainMoviePagination";

import s from "./MainContent.module.scss";

const MainContent: FC = () => {
  return (
    <MainLayout>
      <div className={s.mainHeader}>
        <h1>New and trending</h1>
        <p>Based on player counts and release date</p>
      </div>
      <MainMoviePagination />
    </MainLayout>
  );
};

export default MainContent;
