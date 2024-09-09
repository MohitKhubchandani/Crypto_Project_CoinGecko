import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchCointHistoricDetails } from "../services/fetchCoinHistoricData";
import { CurrencyContext } from "../Context/CurrencyContext";

function useFetchCoinHistory(coinId){
    
    const { Currency } = useContext(CurrencyContext )

    const [days, setDays] = useState(7)

    const [interval, setCoinInterval] = useState('daily')

    const {data : historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, Currency, days], () => fetchCointHistoricDetails(coinId, interval, days, Currency),
    {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
    })

    return [
        historicData,
        isLoading,
        isError,
        Currency,
        days,
        setDays,
        setCoinInterval,
    ]
};

export default useFetchCoinHistory;