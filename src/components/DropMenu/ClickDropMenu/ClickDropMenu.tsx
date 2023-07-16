import { FC, useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import { CrossRightSVG, GreenMarkSVG } from "../../../assets/svg";

import s from "./ClickDropMenu.module.scss";

type Link = { to?: string; link: string };

type ClickDropMenuProps = {
  order?: string | null;
  links: Link[];
  gener: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
};

const ClickDropMenu: FC<ClickDropMenuProps> = ({ links, order = null, gener, setGenre }) => {
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const outSideClick = (e: any) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsDropped(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outSideClick);
    return () => {
      document.removeEventListener("mousedown", outSideClick);
    };
  }, []);

  return (
    <div ref={containerRef} className={s.container}>
      <button onClick={() => setIsDropped((state) => !state)}>
        <span className={s.title}>
          {Boolean(order) && <span>{`${order}:`}</span>}
          <span className={s.spanLink}>{gener}</span>
        </span>
        <CrossRightSVG />
      </button>
      {isDropped && (
        <div className={s.dropLinks}>
          {links.map(({ link }, i) => (
            <button key={i} onClick={() => setGenre(link)}>
              {link}
              {link === gener && <GreenMarkSVG className={s.greenMark} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClickDropMenu;
