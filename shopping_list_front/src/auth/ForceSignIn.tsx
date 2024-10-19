import { useHistory } from "react-router";
import { useEffect } from "react";
import { useAppSelector } from "../store/hook";

export const ForceSignIn = ({ children }: { children: JSX.Element }) => {
  const history = useHistory();
  const user = useAppSelector(s => s.auth?.sessionToken);

  useEffect(() => {
    if (!user) {
      history.push("/auth");
    }
  }, []);
  return children;

}
