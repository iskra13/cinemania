import { FC, useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import rightCross from "../../../assets/svg/cross_right.svg";
import mark from "../../../assets/svg/green_mark.svg";

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
        <img className={s.crossRight} src={`${rightCross}`} alt="error_cross" />
      </button>
      {isDropped && (
        <div className={s.dropLinks}>
          {links.map(({ link }, i) => (
            <button key={i} onClick={() => setGenre(link)}>
              {link}
              {link === gener && (
                <div
                  className={s.mark}
                  style={{ background: `url(${mark}) no-repeat 50%/cover` }}
                ></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClickDropMenu;
