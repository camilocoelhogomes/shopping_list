import { useHistory } from "react-router";
import { useAppDispatch } from "../store/hook";
import { setUser } from "../store/store_slice/userSlice";
import { useAuth } from "./useAuth";

export const ForceSignIn = ({ children }: { children: JSX.Element }) => {
  const history = useHistory();
  const { getToken, user } = useAuth();
  const dispatch = useAppDispatch();
  const token = getToken();

  if (!token) {
    dispatch(setUser())
    history.push("/auth");
    return <></>
  };

  return children;

}
