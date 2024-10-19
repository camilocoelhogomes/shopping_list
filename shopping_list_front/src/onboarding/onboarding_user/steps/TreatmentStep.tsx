import { IonItem, IonRadioGroup, IonRadio, IonInput } from "@ionic/react"
import { setUser } from "../../../store/store_slice/userSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hook";

export const TreatmentStep = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s.user)!;

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
      </IonRadioGroup>
    </IonItem>
  )

}