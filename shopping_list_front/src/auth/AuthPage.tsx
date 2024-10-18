import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useHistory } from "react-router";
import { useAppDispatch } from "../store/hook";
import { firebaseAuthService } from "../firebase/auth/firebaseAuthService";
import { Header } from "../components/Header";
import { setUser } from "../store/store_slice/userSlice";
import { setAuth } from "../store/store_slice/authSlice";

export const AuthPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const siginInWithGoogle = () => {
    firebaseAuthService
      .siginInWithGoogle()
      .then((credential) => {
        console.log(credential);
        dispatch(setUser({
          userId: credential.user?.uid ?? '',
          photoURL: credential.user?.photoURL,
          displayName: credential.user?.displayName,
          email: credential.user?.email,
          phoneNumber: credential.user?.phoneNumber
        })
        );
        credential.user?.getIdToken().then((token) => {
          dispatch(setAuth({
            sessionToken: token,
          }));
          history.push("/onboarding/user");
        })
      });
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