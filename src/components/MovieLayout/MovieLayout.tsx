import React, { FC, useEffect, useState } from "react";

import APIInstance from "../../api/API";

import Loader from "../Loader/Loader";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

type MovieLayoutProps<T> = {
  children: React.ReactNode;
  movieID: string;
  setMovie: React.Dispatch<React.SetStateAction<T>>;
};

const MovieLayout: FC<MovieLayoutProps<any>> = ({ children, movieID, setMovie }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovie = async () => {
      try {
        const response = await APIInstance.get(`movie/${movieID}`);
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

  return <div>{isLoading ? <Loader /> : error ? <ErrorBlock /> : children}</div>;
};

export default MovieLayout;
