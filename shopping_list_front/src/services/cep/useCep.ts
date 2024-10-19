import axios from "axios";
import { UserAddress } from "../../store/reducer_dtos/UserDto";

const cepBaseUrl = import.meta.env.VITE_CEP_API_URL;

const getCep = async (cep: string) => {
  const result = await axios.get<UserAddress>(`${cepBaseUrl}/${cep}`);
  return result.data;
}


export const useCep = () => {
  return { getCep };
};