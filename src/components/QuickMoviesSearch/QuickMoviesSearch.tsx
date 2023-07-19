import { ShortDescriptionMovie, fetchShortDesriptionMovies } from "../../api/services/movies";

import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useDebounce } from "../../hooks/useDebounce";

import Movies from "./Movies/Movies";

import s from "./QuickMoviesSearch.module.scss";

const QuickMoviesSearch = () => {
  const searchInput = useInput();
  const [onFocus, setOnFocus] = useState<boolean>(true);
  const [isload, setIsLoad] = useState<boolean>(true);
  const [movies, setMovies] = useState<ShortDescriptionMovie[]>([]);

  const debouncedSearch: string = useDebounce(searchInput.value, 1000);

  useEffect(() => {
    setIsLoad(true);

    const fetchData = async () => {
      try {
        const response = await fetchShortDesriptionMovies(debouncedSearch);
        setMovies(response.data.docs);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
      }
    };

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

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
