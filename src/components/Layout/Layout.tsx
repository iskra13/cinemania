import { FC, ReactNode } from "react";

import s from "./Layout.module.scss";

type LayotProps = {
  children: ReactNode;
};

const Layout: FC<LayotProps> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;
