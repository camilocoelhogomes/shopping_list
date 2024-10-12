import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonIcon, IonText, IonFabButton } from '@ionic/react';
import ShoppingListCustomComponent from './ShoppingListCustomComponent';
import { bagCheck, camera, trash } from 'ionicons/icons';
import { usePhotoGallery } from './ProductPhotoComponent';

interface ShoppingItem {
  name: string;
  quantity: number;
  isOkToBuy: boolean;
}

export const ShoppingListPage: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [newItem, setNewItem] = useState<ShoppingItem>({ name: '', quantity: 1, isOkToBuy: false });
  const { takePhoto } = usePhotoGallery();
  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem({ name: '', quantity: 1, isOkToBuy: false });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonInput
            value={newItem.name}
            onIonChange={e => setNewItem({ ...newItem, name: e.target.value?.toString() ?? '' })}
            placeholder='Nome do Produto'
          />
          <IonInput
            value={newItem.quantity ?? 1}
            onIonChange={e => setNewItem({ ...newItem, quantity: Number(e.target.value ?? '0') })}
            placeholder='Quantidade'
          />
          <IonButton
            expand="full"
            color="success"
            onClick={addItem}>
            <IonIcon slot='icon-only' icon={bagCheck} />
          </IonButton>
          <IonButton
            color="primary"
            onClick={() => takePhoto()}
          >
            <IonIcon icon={camera} />
          </IonButton>
        </IonItem>
        <IonList>
          {items.map((item, index) => (
            ShoppingListCustomComponent({ index, item, items, setItems })
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

