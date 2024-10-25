import { IonItem, IonRadioGroup, IonRadio, IonInput, IonButton } from "@ionic/react"
import { setUser } from "../../../store/store_slice/userSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { EventHandler, MouseEventHandler } from "react";
import { useBackEndApi } from "../../../services/api/useBackEndApi";
import { UserDto } from "../../../store/reducer_dtos/UserDto";

export const TreatmentStep = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s.user)!;
  const { postMerchantOwner } = useBackEndApi();
  const next: MouseEventHandler<HTMLIonButtonElement> = (e) => {
    e.preventDefault();
    postMerchantOwner(user)
      .then(e => console.log(e))
      .catch(e => console.error(e))
  }
  return (
    <IonItem>
      <IonRadioGroup
        value={user.title}
        onIonChange={e => dispatch(setUser({ ...user, title: e.target.value }))}>
        <IonItem lines="none">
          <IonRadio slot="start" value="Sr."> Sr. </IonRadio>
          <IonRadio slot="start" value="Sra." > Sra. </IonRadio>
          <IonItem>
            <IonInput
              value={user.preferredName}
              onIonChange={e => dispatch(setUser({ ...user, preferredName: e.target.value?.toString() }))}
              placeholder="Como gostaria de ser chamado?"
              label="Seu primeiro nome é?"
              labelPlacement="stacked"
            />
          </IonItem>
        </IonItem>
        <IonItem>
          <IonInput
            value={user.documentNumber}
            onIonChange={e => dispatch(setUser({ ...user, documentNumber: e.target.value?.toString() }))}
            placeholder="Digite seu CPF"
            label="Qual é o seu CPF?"
            labelPlacement="stacked"
          />
        </IonItem>
        <IonButton onClick={next}>
          Próximo
        </IonButton>
      </IonRadioGroup>
    </IonItem>
  )

}