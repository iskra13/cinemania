import axios from "axios";

import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useDebounce } from "../../hooks/useDebounce";

import Movies from "./Movies/Movies";

import s from "./QuickMoviesSearch.module.scss";

export type Movie = {
  alternativeName: string | null;
  name: string;
  id: number;
  poster: {
    previewUrl: string;
  } | null;
  shortDescription: string | null;
  type: string;
  year: number;
  rating: {
    kp: number;
  };
};

export type Movies = {
  docs: Movie[];
};

const QuickMoviesSearch = () => {
  const searchInput = useInput();
  const [onFocus, setOnFocus] = useState<boolean>(true);
  const [isload, setIsLoad] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const debouncedSearch: string = useDebounce(searchInput.value, 2000);

  const API: string = import.meta.env.VITE_APP_CINEMANIA_API;
  const TOKEN: string = import.meta.env.VITE_APP_CINEMANIA_TOKEN;

  useEffect(() => {
    setIsLoad(true);

    const fetchData = async () => {
      try {
        const {
          data: { docs },
        } = await axios.get<Movies>(`${API}/movie?name=${debouncedSearch}`, {
          headers: {
            accept: "application/json",
            "X-API-KEY": TOKEN,
          },
        });
        setMovies(docs);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
      }
    };

    if (debouncedSearch) fetchData();
  }, [debouncedSearch, TOKEN, API]);

  return (
    <form className={s.searchForm}>
      <input
        className={s.searchInput}
        {...searchInput}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        type="text"
        placeholder="Search..."
      />
      {debouncedSearch && onFocus && <Movies isload={isload} movies={movies} />}
    </form>
  );
};

export default QuickMoviesSearch;
