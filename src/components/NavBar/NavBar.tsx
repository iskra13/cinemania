import { Link } from "react-router-dom";

import QuickMoviesSearch from "../QuickMoviesSearch/QuickMoviesSearch";
import HoverDropMenu from "../DropMenu/HoverDropMenu/HoverDropMenu";
import IsUserAuth from "./IsUserAuth/IsUserAuth";

import s from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={s.navBar}>
      <div className={s.logo}>
        <Link to={"/"}>Cinemania</Link>
      </div>
      <QuickMoviesSearch />
      <nav className={s.headerLinks}>
        <IsUserAuth />
        <HoverDropMenu
          title={"atr"}
          links={[
            { to: "/", link: "link1" },
            { to: "/", link: "link2" },
            { to: "/", link: "link3" },
          ]}
        />
      </nav>
    </header>
  );
};

export default NavBar;
