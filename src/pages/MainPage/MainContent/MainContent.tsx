import { FC } from "react";

import MainContainer from "../../../components/MainContainer/MainContainer";
import MainMoviePagination from "../../../components/MainMoviePagination/MainMoviePagination";

import s from "./MainContent.module.scss";

const MainContent: FC = () => {
  return (
    <MainContainer>
      <div className={s.mainHeader}>
        <h1>New and trending</h1>
        <p>Based on player counts and release date</p>
      </div>
      <MainMoviePagination />
    </MainContainer>
  );
};

export default MainContent;
