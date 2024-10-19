import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonText } from "@ionic/react"
import { Header } from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setUser } from "../../store/store_slice/userSlice";
import { TreatmentStep } from "./steps/TreatmentStep";
import { DocumentStep } from "./steps/DocumentStep";
import { useHistory } from "react-router";
import { AddressStep } from "./steps/AddressStep";

export const OnboardingUser: React.FC = () => {

  const userAuth = useContext(FirebaseContext)?.user;
  const history = useHistory();
  if (!userAuth) { history.push('/auth'); return <></> }
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
        <TreatmentStep />
        <DocumentStep />
        <AddressStep />
      </IonContent>
    </IonPage>
  )
}