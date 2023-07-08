import { useState, ChangeEvent } from "react";

export const useInput = () => {
  const [value, setValue] = useState<string>("");

  return {
    value: value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  };
};
