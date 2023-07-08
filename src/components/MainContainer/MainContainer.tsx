import { FC, ReactNode } from "react";

import s from "./MainContainer.module.scss";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

export default MainContainer;
