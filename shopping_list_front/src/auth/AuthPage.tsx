import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useHistory } from "react-router";
import { useAppDispatch } from "../store/hook";
import { firebaseAuthService } from "../firebase/auth/firebaseAuthService";
import { setUser } from "./authSlice";

export const AuthPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const siginInWithGoogle = () => {
    firebaseAuthService
      .siginInWithGoogle()
      .then((credential) => {
        dispatch(setUser(credential.user.uid));
        history.push("/onboarding-merchant");
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Auth</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={siginInWithGoogle} expand="full" color="primary">
          <IonIcon slot="start" icon={logoGoogle} />
          Sign in with Google
        </IonButton>
      </IonContent>
    </IonPage>
  );
};