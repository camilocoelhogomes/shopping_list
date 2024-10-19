import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { useHistory } from "react-router";

export const useAuth = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [token, setToken] = useState<string>();

  const getToken = async () => {
    try {
      if (!firebase || !firebase.user || !firebase.user.displayName) {
        history.push("/auth")
        return;
      };
      const tokenl = await firebase.user.getIdToken();
      setToken(tokenl);
      return token;
    } catch (error) {
      history.push("/auth")
    }
  }

  useEffect(() => {
    history.push("/auth")
  }, [firebase?.user]);


  return { getToken, user: firebase?.user };
}