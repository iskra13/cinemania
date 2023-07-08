import { FC } from "react";
import { Link } from "react-router-dom";

import crossImage from "../../assets/svg/cross_right.svg";

import s from "./CardMedium.module.scss";

type CardMediumProps = {
  background: string;
  name: string;
  id: number;
  genre: string;
  rating: number;
};

const CardMedium: FC<CardMediumProps> = ({ background, name, id, genre, rating }) => {
  return (
    <div className={s.CardMedium} style={{ backgroundImage: `url(${background})` }}>
      <div className={s.cardShadow}>
        <div className={s.cardInfo}>
          <div className={s.cardMeta}>
            <span className={s.cardMarks}>{genre}</span>
            <div className={s.cardRating}>{rating}</div>
          </div>
          <div className={s.cardHeading}>
            <Link to={`/${id}`}>{name}</Link>
          </div>
          <a className={s.cardbuttons}>
            <div>Show more like this</div>
            <img src={crossImage} alt="err_arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMedium;
