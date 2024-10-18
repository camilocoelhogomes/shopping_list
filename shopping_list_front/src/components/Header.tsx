import { IonAvatar, IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"
import { useAppSelector } from "../store/hook"
import { personCircle } from "ionicons/icons";

interface HeaderProps {
  pageHeader: string;
}

export const Header = ({ pageHeader }: HeaderProps) => {
  const user = useAppSelector(s => s.auth);

  return (
    <IonHeader
      translucent
      collapse="fade"
      className="ion-no-border"
      mode="ios"
    >
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>{pageHeader}</IonTitle>

        <IonButtons slot="end">
          <IonButton>
            {user.photoURL ?
              <IonAvatar slot="icon-only"><img src={user.photoURL} /></IonAvatar> :
              <IonIcon icon={user.photoURL ?? personCircle}></IonIcon>
            }
          </IonButton>
        </IonButtons>

      </IonToolbar>

    </IonHeader>
  )
}