import { FC, ReactNode } from "react";

import s from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

export default MainLayout;
