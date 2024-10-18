import React, { useRef } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonModal, IonTitle, IonToolbar } from "@ionic/react"

export interface ImageProcessorProps {
  image: string;
  trigger: string;
}

export const ImageProcessor: React.FC<ImageProcessorProps> = ({ image, trigger }) => {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonModal ref={modal} trigger={trigger}>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => confirm()}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonItem>
        <img src={`data:image/jpg;base64,${image}`} alt="Merchant Logo" />
      </IonItem>
    </IonModal>
  )
}