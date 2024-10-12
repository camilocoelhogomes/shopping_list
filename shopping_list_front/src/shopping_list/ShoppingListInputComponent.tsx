import React from 'react';
import { IonItem, IonCheckbox, IonButton, IonLabel, IonIcon, IonText } from '@ionic/react';
import { trash } from 'ionicons/icons';

interface ShoppingListCustomComponentProps {
  index: number;
  item: { name: string; quantity: number; isOkToBuy: boolean };
  items: { name: string; quantity: number; isOkToBuy: boolean }[];
  setItems: (items: { name: string; quantity: number; isOkToBuy: boolean }[]) => void;
}

const ShoppingListInputComponent: React.FC<ShoppingListCustomComponentProps> = ({ index, item, items, setItems }) => {


  return (
    <></>
  );
};

export default ShoppingListInputComponent;