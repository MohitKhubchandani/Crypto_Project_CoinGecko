import CoinInfo from "./CoinInfo";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../Hooks/useFetchCoinsHistory";


function CoinInfoContainer({coinId}){
    
    const [historicData, isLoading, isError, Currency, days, setDays, setCoinInterval] = useFetchCoinHistory(coinId);

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