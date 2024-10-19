import { IonInput, IonItem } from "@ionic/react"
import { useState } from "react"
import { useCep } from "../../../services/cep/useCep";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { setUser } from "../../../store/store_slice/userSlice";
import { UserAddress } from "../../../store/reducer_dtos/UserDto";

export const AddressStep = () => {

  const { getCep } = useCep();
  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s.user)!;
  const [cep, setCep] = useState('');
  const maskCep = (value?: string) => {
    if (!value) return '';
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }

  const unmaskCep = (value?: string) => {
    if (!value) return '';
    return value.replace(/\D/g, '');
  }

  const handleCepInput = async (e: CustomEvent) => {
    e.preventDefault();
    const unmaskedCep = unmaskCep(e.detail.value);
    let address: Partial<UserAddress> = { cep: unmaskedCep };
    if (unmaskedCep.length === 8) {
      address = await getCep(unmaskedCep);
    }
    dispatch(setUser({
      ...user,
      address: {
        ...user.address,
        ...address
      }
    }))
  }

  return (
    <>
      <IonItem>
        <IonInput
          placeholder="CEP"
          label="CEP:"
          labelPlacement="stacked"
          value={maskCep(user.address?.cep)}
          onIonInput={handleCepInput}
        />
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Estado"
          label="Estado:"
          labelPlacement="stacked"
          value={user.address?.state}
          disabled={true}
        />
        <IonInput
          placeholder="Cidade"
          label="Cidade:"
          labelPlacement="stacked"
          value={user.address?.city}
          disabled={true} />

        <IonInput
          placeholder="Bairro"
          label="Bairro:"
          labelPlacement="stacked"
          value={user.address?.neighborhood}
          onIonInput={e => dispatch(setUser({
            ...user,
            address: {
              ...user.address,
              neighborhood: e.detail.value?.toString()
            }
          }))}
        />
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Rua"
          label="Rua:"
          labelPlacement="stacked"
          value={user.address?.street}
          onIonInput={e => dispatch(setUser({
            ...user,
            address: {
              ...user.address,
              street: e.detail.value?.toString()
            }
          }))}
        />
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Número"
          label="Número:"
          labelPlacement="stacked"
          value={user.address?.number}
          onIonInput={e => dispatch(setUser({
            ...user,
            address: {
              ...user.address,
              number: e.detail.value?.toString().replace(/\D/g, '')
            }
          }))}
        />
        <IonInput
          placeholder="Complemento"
          label="Complemento:"
          labelPlacement="stacked"
          value={user.address?.complement}
          onIonInput={e => dispatch(setUser({
            ...user,
            address: {
              ...user.address,
              complement: e.detail.value?.toString()
            }
          }))}
        />
      </IonItem>
    </>

  )
}