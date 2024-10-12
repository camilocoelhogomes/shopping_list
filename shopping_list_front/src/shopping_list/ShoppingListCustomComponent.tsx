import React from 'react';
import { IonItem, IonCheckbox, IonButton, IonLabel, IonIcon, IonText } from '@ionic/react';
import { trash } from 'ionicons/icons';

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

      <IonLabel
        style={{ textDecoration: item.isOkToBuy ? 'line-through' : 'none', flex: '1' }}
      >
        {item.name}
      </IonLabel>
      <IonText
        style={{ width: 'auto', marginRight: '8px' }}
      >
        {item.quantity}
      </IonText>
      <IonButton
        color="danger"
        onClick={(e) => {
          e.stopPropagation();
          const updatedItems = items.filter((_, i) => i !== index);
          setItems(updatedItems);
        }}
        slot='end'
      >
        <IonIcon slot='icon-only' icon={trash} />
      </IonButton>
    </IonItem>
  );
};

export default ShoppingListCustomComponent;