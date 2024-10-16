import React from "react";
import { IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useAppSelector } from "../store/hook";

export const OnboardingMerchant: React.FC = () => {
  const user = useAppSelector(s => s.auth.userId);
  console.log("On Boarding");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem Vindo ao app! Vamos começar seu cadastro?</IonTitle>
        </IonToolbar>
      </IonHeader>

    </IonPage>)
}