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
  userId: string,
  displayName: string,
  email: string,
  phoneNumber: string,
  photoURL: string
  title: string,
  preferredName: string,
  document: Partial<UserDocumentDto>,
  address: Partial<UserAddress>
}