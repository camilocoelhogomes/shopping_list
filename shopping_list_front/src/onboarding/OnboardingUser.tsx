import { IonAvatar, IonPage } from "@ionic/react"
import { useAppSelector } from "../store/hook";
import { Header } from "../components/Header";

export const OnboardingUser: React.FC = () => {

  return (
    <IonPage>
      <Header pageHeader="Bem vindo!" />
    </IonPage>
  )
}