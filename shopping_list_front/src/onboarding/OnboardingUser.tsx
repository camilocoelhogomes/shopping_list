import { IonAvatar, IonPage } from "@ionic/react"
import { useAppSelector } from "../store/hook";

export const OnboardingUser: React.FC = () => {
  const user = useAppSelector(s => s.auth);
  return (
    <IonPage>
      <IonAvatar>{
        user.photoURL ?
          <img src={user.photoURL} />
          : <img src="https://www.gravatar.com/avatar/" />
      }
      </IonAvatar>
    </IonPage>
  )
}