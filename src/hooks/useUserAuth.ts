import { useAppSelector } from "./redux";

export const useUserAuth = () => {
  const { email, id, isLoading } = useAppSelector((state) => state.user);

  return { isAuth: Boolean(email), email, id, isLoading };
};
