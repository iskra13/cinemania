import { FC } from "react";
import type { Movie } from "../QuickMoviesSearch";

import Loader from "../../Loader/Loader";
import ErrorBlock from "../../ErrorBlock/ErrorBlock";
import MovieItem from "../MovieItem/MovieItem";

import s from "./Movies.module.scss";

type MoviesProps = {
  isload: boolean;
  movies: Movie[];
};

const Movies: FC<MoviesProps> = ({ isload, movies }) => {
  return (
    <div className={s.moviesFound}>
      {isload ? (
        <Loader />
      ) : movies.length ? (
        movies.map((item) => (
          <MovieItem
            key={item.id}
            id={item.id}
            name={item.name}
            alternativeName={item.alternativeName}
            poster={item.poster}
            shortDescription={item.shortDescription}
            type={item.type}
            year={item.year}
            rating={item.rating}
          />
        ))
      ) : (
        <ErrorBlock />
      )}
    </div>
  );
};

export default Movies;
