import axiosInstance from '../helpers/axiosInstances';


export async function fetchCointData(id) {
    try {
      const response = await axiosInstance.get(`/coins/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null; 
    }
}