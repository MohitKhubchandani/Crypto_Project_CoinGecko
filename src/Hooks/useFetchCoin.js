import { useQuery } from "react-query";
import { CurrencyContext } from "../Context/CurrencyContext";
import { useContext } from "react";
import { fetchCointDetails } from "../services/fetchCoinDetails";

function useFetchCoin(coinId ){


    const { Currency } = useContext(CurrencyContext)
  
    const { isError , isLoading,  data : coin} = useQuery(['coin', coinId], () => fetchCointDetails(coinId),{
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    });

    return {
        Currency,
        isError,
        isLoading,
        coin
    }
};

export default useFetchCoin;