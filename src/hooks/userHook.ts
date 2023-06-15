import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const useUserHook = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
