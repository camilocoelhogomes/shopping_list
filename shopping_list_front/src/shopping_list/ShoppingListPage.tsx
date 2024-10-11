import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton, IonCheckbox } from '@ionic/react';
import ShoppingListCustomComponent from './ShoppingListCustomComponent';

interface ShoppingItem {
  name: string;
  quantity: number;
  isOkToBuy: boolean;
}

export const ShoppingListPage: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [newItem, setNewItem] = useState<ShoppingItem>({ name: '', quantity: 1, isOkToBuy: false });

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
        <IonList>
          {items.map((item, index) => (
            ShoppingListCustomComponent({ index, item, items, setItems })
          ))}
        </IonList>
        <IonItem>
          <IonLabel position="floating">Product Name</IonLabel>
          <IonInput
            value={newItem.name}
            onIonChange={e => setNewItem({ ...newItem, name: e.target.value?.toString() ?? '' })}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Quantity</IonLabel>
          <IonInput
            type="number"
            value={newItem.quantity}
            onIonChange={e => setNewItem({ ...newItem, quantity: parseInt(e.target.value?.toString() ?? '0') })}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Ok to Buy</IonLabel>
          <IonCheckbox
            checked={newItem.isOkToBuy}
            onIonChange={e => setNewItem({ ...newItem, isOkToBuy: e.detail.checked })}
          />
        </IonItem>
        <IonButton expand="full" onClick={addItem}>Add Item</IonButton>
      </IonContent>
    </IonPage>
  );
};

