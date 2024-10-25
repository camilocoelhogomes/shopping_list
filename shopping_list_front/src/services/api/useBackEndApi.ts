import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { UserDto } from "../../store/reducer_dtos/UserDto";

const url = () => import.meta.env.VITE_BACK_END_URL;

export const useBackEndApi = () => {

  const firebase = useContext(FirebaseContext)

  const alive = async () => {
    try {
      const response = (await axios.get(`${url()}/health-check`)).data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const getMerchantOwner = async () => {
    try {
      const token = await firebase?.auth.currentUser?.getIdToken();
      if (!token) throw new Error("No token found");
      const response = (await axios.get(`${url()}/admin/merchant-owner`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })).data;
      return response;
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  }

  const postMerchantOwner = async (merchantOwner: Partial<UserDto>) => {
    try {
      const token = await firebase?.auth.currentUser?.getIdToken();
      if (!token) throw new Error("No token found");
      const response = (await axios.post(`${url()}/admin/merchant-owner`, merchantOwner, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })).data;
      return response;
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  }

  return { alive, getMerchantOwner, postMerchantOwner }
};