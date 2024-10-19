import { useHistory } from "react-router";
import { useContext, useEffect } from "react";
import { useAppSelector } from "../store/hook";
import { FirebaseContext } from "../firebase/FirebaseContext";

export const ForceSignIn = ({ children }: { children: JSX.Element }) => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    if (!firebase?.user) {
      history.push("/auth");
    }
  }, []);
  return children;

}
