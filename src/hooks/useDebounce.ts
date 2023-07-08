import { useState, useEffect } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debounceValue;
};
