import React, { useState } from "react";
import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useAppSelector } from "../store/hook";
import { usePhotoGallery } from "../shopping_list/ProductPhotoComponent";
import { ImageProcessor } from "../image_processor/ImageProcessor";

interface Merchant {
  merchantName: string;
  merchantUri: string;
  merchantLogo?: string;
}

export const OnboardingMerchant: React.FC = () => {
  const userId = useAppSelector(s => s.auth);
  const [merchant, setMerchant] = useState<Partial<Merchant>>({ merchantName: '', merchantUri: '' })
  const { getPhotoFromGalery } = usePhotoGallery();
  const merchantChange = (e: Merchant[keyof Merchant], key: keyof Merchant) => {
    if (key === 'merchantName') {
      const merchantName = e;
      setMerchant({ ...merchant, merchantName, merchantUri: cleanSubdomainName(e) });
      return;
    }
    setMerchant({ ...merchant, [key]: e });
  }

  function cleanSubdomainName(subdomain?: string): string | undefined {
    // Remove invalid characters
    if (!subdomain) return;
    let cleaned = subdomain.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Remove invalid characters
    cleaned = cleaned.replace(/[^a-zA-Z0-9-]/g, '-');

    // Remove leading and trailing hyphens
    cleaned = cleaned.replace(/^-+|-+$/g, '-');

    // Ensure the subdomain is between 1 and 63 characters long
    if (cleaned.length > 63) {
      cleaned = cleaned.substring(0, 63);
    }

    return cleaned.toLocaleLowerCase();
  }

  function handleUploadImage() {
    getPhotoFromGalery().then((photo) => {
      merchantChange(photo, 'merchantLogo');

    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem Vindo ao app! Vamos começar seu cadastro?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonInput
            value={merchant.merchantName}
            onInput={(e) => merchantChange(e.currentTarget.value?.toString(), 'merchantName')}
            placeholder="Qual o nome da seu mercado?"
            label="Nome do mercado"
            labelPlacement="stacked"
            maxlength={60}
          />
        </IonItem>
        <IonItem>
          <IonText color="primary">
            Subdominio: {merchant.merchantUri}
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton id="open-modal" onClick={handleUploadImage}>Upload Image</IonButton>
        </IonItem>
        {merchant.merchantLogo && (
          <ImageProcessor
            image={merchant.merchantLogo}
            trigger="open-modal" />
        )}
      </IonContent>
    </IonPage>)
}