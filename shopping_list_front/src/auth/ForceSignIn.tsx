import { useHistory } from "react-router";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";

export const ForceSignIn = ({ children }: { children: JSX.Element }) => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    try {
      if (!firebase?.user) { history.push("/auth"); return; }
      await firebase.user.getIdToken();
    } catch (error) {
      history.push("/auth");
    }
  };
  return children;

}
