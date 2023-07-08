import { Link } from "react-router-dom";

import { useUserAuth } from "../../../hooks/useUserAuth";

import userImg from "../../../assets/images/user.png";

const IsUserAuth = () => {
  const { isAuth, email } = useUserAuth();

  return isAuth ? (
    <>
      <span
        style={{
          backgroundImage: `url(${userImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "24px",
          height: "30px",
          backgroundPosition: "center",
        }}
      ></span>
      <Link to={"/user"}>
        <span style={{ fontWeight: "600" }}>{email}</span>
      </Link>
    </>
  ) : (
    <>
      <Link to={"/signin"}>log in</Link>
      <Link to={"/signup"}>sign up</Link>
    </>
  );
};

export default IsUserAuth;
