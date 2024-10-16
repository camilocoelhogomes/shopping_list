import React from "react";
import { IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useAppSelector } from "../store/hook";

export const OnboardingMerchant: React.FC = () => {

  console.log("On Boarding");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping List</IonTitle>
        </IonToolbar>
      </IonHeader>

    </IonPage>)
}