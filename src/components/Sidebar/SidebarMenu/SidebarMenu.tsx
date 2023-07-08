import { FC } from "react";

import { Link } from "react-router-dom";

import s from "./SidebarMenu.module.scss";

type Link = {
  path: string;
  linkname: string;
  linkimg: string;
};

type SidebarMenuProps = {
  title: string;
  links: Link[];
};

const SidebarMenu: FC<SidebarMenuProps> = ({ title, links }) => {
  return (
    <div className={s.sidebarMenu}>
      <span className={s.title}>{title}</span>
      <ul className={s.links}>
        {links.map(({ path, linkimg, linkname }, id) => (
          <li key={id}>
            <Link className={s.link} to={path}>
              <span className={s.linkImage} style={{ backgroundImage: `url(${linkimg})` }}></span>
              <span className={s.linkName}>{linkname}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
