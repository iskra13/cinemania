import React, { FC, useState, useEffect, useCallback } from "react";
import { CardsDescriptionMovie, fetchCardsDescriptionMovies } from "../../api/services/movies";

import ClickDropMenu from "../DropMenu/ClickDropMenu/ClickDropMenu";
import PaginationBlock from "../PaginationBlock/PaginationBlock";
import CardMedium from "../CardMedium/CardMedium";

import { generText } from "../../texts/DropMenuTexts";

const MainMoviePagination: FC = () => {
  const [genre, setGenre] = useState<string>("movie");
  const [data, setData] = useState<CardsDescriptionMovie[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setData([]);
  }, [genre]);

  const fetchMovies = useCallback(() => fetchCardsDescriptionMovies(page, genre), [page, genre]);

  return (
    <React.Fragment>
      <div style={{ marginBottom: "24px", display: "flex" }}>
        <ClickDropMenu order={"Order by"} links={generText} gener={genre} setGenre={setGenre} />
      </div>
      <PaginationBlock
        callBack={fetchMovies}
        setData={setData}
        setPage={setPage}
        data={data}
        page={page}
        dependence={genre}
      >
        {data.map((item) => (
          <CardMedium
            key={item.id}
            background={item.poster.url}
            genre={item.type}
            id={item.id}
            name={item.name}
            rating={item.rating.kp}
          />
        ))}
      </PaginationBlock>
    </React.Fragment>
  );
};

export default MainMoviePagination;
