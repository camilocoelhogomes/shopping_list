import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useHistory } from "react-router";
import { useAppDispatch } from "../store/hook";
import { Header } from "../components/Header";
import { setUser } from "../store/store_slice/userSlice";
import { useContext } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const firebaseConfig = useContext(FirebaseContext);
  const siginInWithGoogle = async () => {
    const googleSignIn = new GoogleAuthProvider();
    firebaseConfig!.auth.useDeviceLanguage();
    const { user } = await signInWithPopup(firebaseConfig!.auth, googleSignIn);
    firebaseConfig!.setUser(user);
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