import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonText } from "@ionic/react"
import { Header } from "../components/Header";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setUser } from "../store/store_slice/userSlice";

interface User {
  name: string;
  authProviderId: string;
  authProvider: string;

}

export const OnboardingUser: React.FC = () => {

  const userAuth = useContext(FirebaseContext)!.user!;
  const user = useAppSelector(s => s.user)!;
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUser({
      ...user,
      preferredName: user.displayName?.split(' ')[0] ?? undefined,
    }))
  }, [])

  return (
    <IonPage>
      <Header pageHeader="" />
      <IonContent>
        <IonItem lines="none">
          <IonText color="dark">
            <h1>
              Bem Vindo {userAuth.displayName}!
            </h1>
          </IonText>
        </IonItem>
        <IonRadioGroup
          value={user.title}
          onIonChange={e => dispatch(setUser({ ...user, title: e.target.value }))}>
          <IonItem lines="none">
            <IonRadio slot="start" value="Sr."> Sr. </IonRadio>
            <IonRadio slot="start" value="Sra." > Sra. </IonRadio>
            <IonItem>
              <IonInput
                value={user.preferredName}
                onIonChange={e => dispatch(setUser({ ...user, preferredName: e.target.value?.toString() }))}
                placeholder="Como gostaria de ser chamado?"
                label="Confirme seu primeiro nome"
                labelPlacement="stacked"
              />
            </IonItem>

          </IonItem>
        </IonRadioGroup>


      </IonContent>
    </IonPage>
  )
}