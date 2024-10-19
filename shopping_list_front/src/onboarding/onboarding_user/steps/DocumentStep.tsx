import { IonInput, IonItem } from "@ionic/react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { setUser } from "../../../store/store_slice/userSlice";

export const DocumentStep = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s.user)!;
  const onchange = (e: CustomEvent) => {
    e.preventDefault();
    dispatch(setUser({
      ...user,
      document: {
        ...(user.document ?? {}),
        documentNumber: unmaskValue(e.detail.value)
      }
    }));
  }

  const maksValue = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  }

  const unmaskValue = (value: string) => {
    return value.replace(/\D/g, '');
  }

  return (
    <IonItem>
      <IonInput
        value={maksValue(user.document?.documentNumber ?? '')}
        onIonInput={onchange}
        type="text"
        placeholder="CPF"
        label="Qual seu cpf?"
        labelPlacement="stacked"
      />
    </IonItem>
  );
};