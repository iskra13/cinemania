import React, { FC, useEffect, useState } from "react";
import { fetchAllDescriptionMovie, AllDescriptionMovie } from "../../../api/services/movies";

import Loader from "../../Loader/Loader";
import PageArt from "../../PageArt/PageArt";
import ErrorBlock from "../../ErrorBlock/ErrorBlock";

import s from "./MovieLayout.module.scss";

type MovieLayoutProps = {
  children: React.ReactNode;
  movieID: string;
  setMovie: React.Dispatch<React.SetStateAction<AllDescriptionMovie | null>>;
  url: string;
};

const MovieLayout: FC<MovieLayoutProps> = ({ children, movieID, setMovie, url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovie = async () => {
      try {
        const response = await fetchAllDescriptionMovie(movieID);
        setMovie(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieID, setMovie]);

  return (
    <PageArt urlImage={`${url ?? ""}`}>
      <div className={s.movieLayout}>
        {isLoading ? <Loader /> : error ? <ErrorBlock /> : children}
      </div>
    </PageArt>
  );
};

export default MovieLayout;
