import axiosInstance from '../../helpers/axiosInstances';


export async function fetchCointData(page = 1, currency = 'usd') {
  const perPage = 10
    try {
      const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null; 
    }
}