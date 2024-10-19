import { useHistory } from "react-router";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { useAppDispatch } from "../store/hook";
import { setUser } from "../store/store_slice/userSlice";

export const ForceSignIn = ({ children }: { children: JSX.Element }) => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const dispatch = useAppDispatch();
  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    try {
      if (!firebase?.user) return resignUser();
      await firebase.user.getIdToken();
    } catch (error) {
      resignUser();
    }
  };

  const resignUser = () => {
    dispatch(setUser())
    history.push("/auth");
  }

  return children;

}
