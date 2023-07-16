import React, { FC, ReactNode } from "react";

import s from "./PageArt.module.scss";

type PageArtProps = {
  children: ReactNode;
  urlImage: string;
};

const PageArt: FC<PageArtProps> = ({ urlImage, children }) => {
  return (
    <React.Fragment>
      {children}
      <div
        className={s.pageArt}
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), #151515), url(${urlImage})`,
        }}
      ></div>
    </React.Fragment>
  );
};

export default PageArt;
