import React, { useState } from "react";
import { IonContent, IonHeader, IonInput, IonItem, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useAppSelector } from "../store/hook";

interface Merchant {
  merchantName: string;
  merchantUri: string;
}

export const OnboardingMerchant: React.FC = () => {
  const userId = useAppSelector(s => s.auth);
  const [merchant, setMerchant] = useState<Merchant>({ merchantName: '', merchantUri: '' })
  const merchantChange = (e: React.FormEvent<HTMLIonInputElement>, key: keyof Merchant) => {
    e.preventDefault();
    if (key === 'merchantName') {
      const merchantName = e.currentTarget.value?.toString() ?? '';
      setMerchant({ ...merchant, merchantName, merchantUri: cleanSubdomainName(merchantName) });
      return;
    }
    setMerchant({ ...merchant, [key]: e.currentTarget.value?.toString() ?? '' });
  }

  function cleanSubdomainName(subdomain: string): string {
    // Remove invalid characters
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
            onInput={(e) => merchantChange(e, 'merchantName')}
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
      </IonContent>
    </IonPage>)
}