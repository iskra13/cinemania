import { useState, useEffect } from "react";
import { APIAccessor } from "../api/API";
import { AxiosResponse } from "axios";

type ResponseFetch = {
  data: any;
  isLoading: boolean;
  error: null | unknown;
  isError: boolean;
};

export const useFetch = (method: string, postfixUrl: string): ResponseFetch => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        setError(null);
        const responseData = await APIAccessor<AxiosResponse>(`${postfixUrl}`, {
          method: method,
        });

        setData(responseData.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [method, postfixUrl]);

  return { data, isLoading, error, isError: Boolean(error) };
};
