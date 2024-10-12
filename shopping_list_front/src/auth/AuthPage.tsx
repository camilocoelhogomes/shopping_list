import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { firebaseAuthService } from "../firebase/fibaseConfig";
import { useHistory } from "react-router";

export const AuthPage: React.FC = () => {
  const history = useHistory();
  const siginInWithGoogle = () => {
    firebaseAuthService
      .siginInWithGoogle()
      .then(() => { history.push('/shopping-list') })
      .catch((error) => { console.error(error) });
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