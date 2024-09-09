import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { useContext, useState } from "react";
import { fetchCointHistoricDetails } from "../../services/fetchCoinHistoricData";
import Alert from "../Alert/Alert";

function CoinInfoContainer({coinId}){
    
    const { Currency } = useContext(CurrencyContext)

    const [days, setDays] = useState(7)

    const [interval, setCoinInterval] = useState('daily')

    const {data : historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, Currency, days], () => fetchCointHistoricDetails(coinId, interval, days, Currency),
    {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
    })

    if (isLoading) {
        return <span className='loading loading-spinner loading-lg'></span>
    };

    if (isError) {
        <Alert message="Error Fetching Data" type="error"/>
    }
    
    return(
     <>
        <CoinInfo 
        historicData={historicData} 
        setDays={setDays} 
        setCoinInterval={setCoinInterval}
        days={days}
        Currency={Currency}
        />
     </>
    )
};

export default CoinInfoContainer;