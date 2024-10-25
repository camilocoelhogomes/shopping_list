export interface UserDocumentDto {
  documentNumber: string,
}

export interface UserAddress {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string
}

export interface UserDto {
  userId: number;
  userProviderId: string;
  displayName: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  title?: string;
  preferredName?: string;
  documentNumber?: string;
}