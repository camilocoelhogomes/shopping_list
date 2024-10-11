import React from 'react';
import { IonItem, IonCheckbox, IonButton, IonLabel } from '@ionic/react';

interface ShoppingListCustomComponentProps {
  index: number;
  item: { name: string; quantity: number; isOkToBuy: boolean };
  items: { name: string; quantity: number; isOkToBuy: boolean }[];
  setItems: (items: { name: string; quantity: number; isOkToBuy: boolean }[]) => void;
}

const ShoppingListCustomComponent: React.FC<ShoppingListCustomComponentProps> = ({ index, item, items, setItems }) => {
  return (
    <IonItem
      key={index}
      button
      onClick={() => {
        const updatedItems = [...items];
        updatedItems[index].isOkToBuy = !updatedItems[index].isOkToBuy;
        setItems(updatedItems);
      }}
    >
      <IonCheckbox
        checked={item.isOkToBuy}
        onIonChange={e => {
          const updatedItems = [...items];
          updatedItems[index].isOkToBuy = e.detail.checked;
          setItems(updatedItems);
        }}
        slot="start"
      />
      <IonButton
        color="danger"
        onClick={(e) => {
          e.stopPropagation();
          const updatedItems = items.filter((_, i) => i !== index);
          setItems(updatedItems);
        }}
      >
        Delete
      </IonButton>
      <IonLabel>
        {item.name} - {item.quantity} {item.isOkToBuy ? '(Bought)' : '(Not bought)'}
      </IonLabel>
    </IonItem>
  );
};

export default ShoppingListCustomComponent;