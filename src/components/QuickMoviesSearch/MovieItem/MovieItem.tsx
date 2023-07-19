import { FC } from "react";
import type { ShortDescriptionMovie } from "../../../api/services/movies";

import { Link } from "react-router-dom";

import { defineGradeMovie } from "../../../utils/defineGradeMovie";

import s from "./MovieItem.module.scss";

const MovieItem: FC<ShortDescriptionMovie> = ({
  alternativeName,
  name,
  id,
  poster,
  shortDescription,
  type,
  year,
  rating,
}) => {
  return (
    <Link to={`/${id}`}>
      <div className={s.movieItem}>
        {poster ? (
          <img src={`${poster.previewUrl}`} alt="error_image" />
        ) : (
          <img className={s.notImage} alt="" />
        )}
        <div className={s.about}>
          <h3 className={s.title}>{alternativeName || name}</h3>
          <p className={s.description}>{shortDescription}</p>
          <div className={s.stats}>
            <span className={s.kp} style={{ color: defineGradeMovie(rating.kp) }}>
              {rating.kp}
            </span>
            <span>{type},</span>
            <span>{year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
