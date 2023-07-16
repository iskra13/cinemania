import { FC, useRef, useEffect, useState } from "react";

import APIInstance from "../../api/API";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import Loader from "../Loader/Loader";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

import s from "./PaginationBlock.module.scss";

type PaginationBlockProps<T> = {
  postfixAPI: string;
  children: React.ReactNode;
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationBlock: FC<PaginationBlockProps<any>> = ({
  postfixAPI,
  children,
  setData,
  setPage,
  data,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const observer = useIntersectionObserver(nextPage);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const getData = async () => {
      try {
        const {
          data: { docs },
        } = await APIInstance.get(postfixAPI);
        setData((prevState) => [...prevState, ...docs]);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [postfixAPI, setData]);

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
