import { FC, useRef, useEffect, useState } from "react";
import axios from "axios";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import Loader from "../Loader/Loader";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

import s from "./PaginationBlock.module.scss";

type PaginationBlockProps<Data> = {
  api: string;
  children: React.ReactNode;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationBlock: FC<PaginationBlockProps<any>> = ({
  api,
  children,
  setData,
  setPage,
  data,
}) => {
  const [error, setError] = useState<unknown>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const TOKEN: string = import.meta.env.VITE_APP_KINOPOISK_TOKEN;

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const observer = useIntersectionObserver(nextPage);

  useEffect(() => {
    setIsLoading(true);
    setError("");

    const getData = async () => {
      try {
        const {
          data: { docs },
        } = await axios.get(api, {
          headers: {
            accept: "application/json",
            "X-API-KEY": TOKEN,
          },
        });
        setData((prevState) => [...prevState, ...docs]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    };

    getData();
  }, [TOKEN, api, setData]);

  useEffect(() => {
    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
  }, [data, observer]);

  return (
    <div className={s.wrapperPagination}>
      <div className={s.paginationBlock}>{children}</div>
      {isLoading && <Loader />}
      {error ? <ErrorBlock /> : <div ref={lastElementRef}></div>}
    </div>
  );
};

export default PaginationBlock;
