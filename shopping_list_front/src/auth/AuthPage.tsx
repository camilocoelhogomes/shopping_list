import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useHistory } from "react-router";
import { useAppDispatch } from "../store/hook";
import { firebaseAuthService } from "../firebase/auth/firebaseAuthService";
import { setUser } from "./authSlice";
import { Header } from "../components/Header";

export const AuthPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const siginInWithGoogle = () => {
    firebaseAuthService
      .siginInWithGoogle()
      .then((credential) => {
        console.log(credential);
        credential.user?.getIdToken().then((token) => {
          dispatch(setUser({
            userId: credential.user?.uid ?? '',
            sessionToken: token,
            photoURL: credential.user?.photoURL,
            displayName: credential.user?.displayName,
            email: credential.user?.email,
            phoneNumber: credential.user?.phoneNumber
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