import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useHistory } from "react-router";
import { useAppDispatch } from "../store/hook";
import { Header } from "../components/Header";
import { setUser } from "../store/store_slice/userSlice";
import { setAuth } from "../store/store_slice/authSlice";
import { useContext } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const firebaseContext = useContext(FirebaseContext);
  const siginInWithGoogle = async () => {
    const googleSignIn = new GoogleAuthProvider();
    firebaseContext.auth.useDeviceLanguage();
    const { user } = await signInWithPopup(firebaseContext.auth, googleSignIn);
    const token = await user.getIdToken();
    dispatch(setAuth({ sessionToken: token }));
    dispatch(setUser({
      userId: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber
    }));
    history.push("/onboarding/user");
  }

  return (
    <IonPage>
      <Header pageHeader="Auth" />
      <IonContent>
        <IonButton onClick={siginInWithGoogle} expand="full" color="primary">
          <IonIcon slot="start" icon={logoGoogle} />
          Sign in with Google
        </IonButton>
      </IonContent>
    </IonPage>
  );
};