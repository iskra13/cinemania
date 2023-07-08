import { FC } from "react";

import { Link } from "react-router-dom";

import SidebarMenu from "./SidebarMenu/SidebarMenu";

import { NewRleaseText, TopText, BrowseText, PlatformsText } from "../../texts/SiderBarMenuTexts";

import s from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={s.sidebarWrapper}>
      <aside className={s.sidebar}>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Reviews</Link>
        <SidebarMenu title={"New Release"} links={NewRleaseText} />
        <SidebarMenu title={"Top"} links={TopText} />
        <SidebarMenu title={"Browse"} links={BrowseText} />
        <SidebarMenu title={"Platforms"} links={PlatformsText} />
      </aside>
    </div>
  );
};

export default Sidebar;
