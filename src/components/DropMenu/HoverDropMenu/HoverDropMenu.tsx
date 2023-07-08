import { FC } from "react";
import { Link } from "react-router-dom";

import s from "./HoverDropMenu.module.scss";

type Link = { to: string; link: string };

type DropMenuProps = {
  title: string;
  links: Link[];
};

const HoverDropMenu: FC<DropMenuProps> = ({ title, links }) => {
  return (
    <div className={s.container}>
      <span className={s.title}>{title}</span>
      <div className={s.dropLinks}>
        {links.map(({ to, link }, i) => (
          <Link key={i} to={to}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HoverDropMenu;
