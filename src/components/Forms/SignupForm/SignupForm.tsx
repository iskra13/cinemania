import { FC } from "react";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/redux";

import { signupUser } from "../../../store/Slices/userSlice";

import LayoutForm from "../LayoutForm/LayoutForm";

import s from "./SignupForm.module.scss";

export type GetValues = {
  email: string;
  password: string;
};

const SignupForm: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    getValues,
    formState: { isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const submitHandler = () => {
    const values = getValues() as GetValues;
    if (isValid) {
      dispatch(signupUser(values));
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
    <LayoutForm title={"Sign up"}>
      <div className={s.input}>
        <input type="text" {...settingsInputEmail} placeholder="Email" />
      </div>
      <div className={s.input}>
        <input type="password" {...settingsInputPassword} placeholder="Password" />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        Sign up
      </button>
      <div className={s.links}>
        <Link to={"/signin"}>Already have an account? Log in.</Link>
      </div>
    </LayoutForm>
  );
};

export default SignupForm;
