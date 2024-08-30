import axiosInstance from '../../helpers/axiosInstances';


export async function fetchCointData() {
    try {
      const response = await axiosInstance.get('./coins/markets?vs_currency=usd');
      console.log(response);
      return response;
      
    } catch (error) {
      console.error(error);
      return null; 
    }
}