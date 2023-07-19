import { AxiosResponse } from "axios";
import { FC, useRef, useEffect, useState } from "react";
import { DocsArr } from "../../api/services/movies";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import Loader from "../Loader/Loader";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

import s from "./PaginationBlock.module.scss";

type PaginationBlockProps<T> = {
  callBack: () => Promise<AxiosResponse<DocsArr<T>>>;
  children: React.ReactNode;
  data: T[];
  page: number;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  dependence: string;
};

const PaginationBlock: FC<PaginationBlockProps<any>> = ({
  children,
  setData,
  setPage,
  data,
  callBack,
  dependence,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const observer = useIntersectionObserver(nextPage);

  useEffect(() => {
    setPage(1);
  }, [dependence, setPage]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const getData = async () => {
      try {
        const response = await callBack();
        setData((prevState) => [...prevState, ...response.data.docs]);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [setData, callBack]);

  useEffect(() => {
    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
  }, [data, observer]);

  return (
    <div className={s.wrapperPagination}>
      <div className={s.paginationBlock}>{children}</div>
      {isLoading ? <Loader /> : error ? <ErrorBlock /> : <div ref={lastElementRef}></div>}
    </div>
  );
};

export default PaginationBlock;
