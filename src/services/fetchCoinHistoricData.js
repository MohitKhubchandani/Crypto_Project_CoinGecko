import axiosInstance from '../helpers/axiosInstances';


export async function fetchCointHistoricDetails(id, interval , days, currency = 'usd') {
    try {
      const response =  await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null; 
    }
};