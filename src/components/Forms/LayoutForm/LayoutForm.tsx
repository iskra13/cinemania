import { useEffect, FC, ReactNode } from "react";

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../hooks/useUserAuth";

import s from "./LayoutForm.module.scss";

type LayoutFormProps = {
  title: string;
  children: ReactNode;
};

const LayoutForm: FC<LayoutFormProps> = ({ title, children }) => {
  const navigate = useNavigate();
  const { isAuth } = useUserAuth();

  useEffect(() => {
    if (isAuth) navigate("/user");
  }, [isAuth, navigate]);

  return (
    <form className={s.form}>
      <h2>{title}</h2>
      {children}
    </form>
  );
};

export default LayoutForm;
