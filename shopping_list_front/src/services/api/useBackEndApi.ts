import axios from "axios";

const url = () => import.meta.env.VITE_BACK_END_URL;

export const useBackEndApi = () => {
  const alive = async () => {
    try {
      const response = (await axios.get(`${url()}/health-check`)).data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { alive }
};