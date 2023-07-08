import { FC, useState, useEffect } from "react";

import ClickDropMenu from "../DropMenu/ClickDropMenu/ClickDropMenu";
import PaginationBlock from "../PaginationBlock/PaginationBlock";
import CardMedium from "../CardMedium/CardMedium";

import { generText } from "../../texts/DropMenuTexts";

export type MediumCardItem = {
  alternativeName: string;
  name: string;
  poster: { url: string };
  id: number;
  type: string;
  rating: { kp: number };
};

const MainMoviePagination: FC = () => {
  const [genre, setGenre] = useState<string>("movie");
  const [data, setData] = useState<MediumCardItem[]>([]);
  const [page, setPage] = useState<number>(1);

  const API: string = import.meta.env.VITE_APP_CINEMANIA_API;

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [genre]);

  return (
    <>
      <div style={{ marginBottom: "24px", display: "flex" }}>
        <ClickDropMenu order={"Order by"} links={generText} gener={genre} setGenre={setGenre} />
      </div>
      <PaginationBlock
        api={`${API}/movie?page=${page}&type=${genre}&limit=10`}
        setData={setData}
        setPage={setPage}
        data={data}
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
    </>
  );
};

export default MainMoviePagination;