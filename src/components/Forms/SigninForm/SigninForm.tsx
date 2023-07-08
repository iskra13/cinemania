import { FC } from "react";
import type { GetValues } from "../SignupForm/SignupForm";

import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

import { signinUser } from "../../../store/Slices/userSlice";

import LayoutForm from "../LayoutForm/LayoutForm";

import s from "./SigninForm.module.scss";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  const {
    register,
    getValues,
    formState: { isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const submitHandler = () => {
    const values = getValues() as GetValues;
    if (isValid) {
      dispatch(signinUser(values));
      reset();
    }
  };

  const settingsInputEmail = {
    ...register("email", {
      required: "Field is required",
    }),
  };

  const settingsInputPassword = {
    ...register("password", {
      required: "Field is required",
      minLength: {
        value: 8,
        message: "Minimum 8 characters",
      },
    }),
  };

  return (
    <LayoutForm title={"Log in"}>
      <div>
        <input type="text" {...settingsInputEmail} placeholder="Email" />
      </div>
      <div>
        <input type="password" {...settingsInputPassword} placeholder="Password" />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        {isLoading ? <Loader /> : "Log in"}
      </button>
      <div className={s.links}>
        <Link to={"/signup"}>Don't have an account? Sign up.</Link>
        <Link to={"/"}>Forgot your password?</Link>
      </div>
    </LayoutForm>
  );
};

export default LoginForm;
