import parse from 'html-react-parser'
import CurrencyFormater from "../services/CurrencyFormater";
import CoinInfoContainer from "../Components/CoinInfo/CoinInfoContainer";
import useFetchCoin from '../Hooks/useFetchCoin';
import { useParams } from 'react-router-dom';

function CointdetailsPage(){

  const {coinId} = useParams()

  const {Currency, isError, isLoading, coin} = useFetchCoin(coinId);

  
  if (isLoading) {
    return;
  };

  if (isError) {
    return <div>Error: Something went Wrong</div>
  }
  
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-200">
        
        <img src={coin?.image?.large} alt={coin?.name} className="h-52 mb-5"/>
     
        <h1 className="font-bold text-4xl mb-5">
        {coin?.name}
        </h1>

        <p className="w-full px-6 py-4 text-justify">
          {parse(coin?.description?.en)}
        </p>

        <div className="w-full flex flex-col md:flex-row md:justify-around">
            <div className="flex items-center mb-4 md:mb-0">
              
              <h2 className="text-xl font-bold">Rank</h2>
              <span className="ml-3 text-xl">
                {coin?.market_cap_rank}
              </span>
              
            </div>

            <div className="flex items-center mb-4 md:mb-0">
              
              <h2 className="text-xl font-bold text-yellow-400">Current Price</h2>
              <span className="ml-3 text-xl">
                {CurrencyFormater(coin?.market_data.current_price[Currency] , Currency)}
              </span>
              
            </div>

        </div>
      </div>

      <div className="md:w-2/3 w-full p-6">
      <CoinInfoContainer coinId={coinId}/>
      </div>

    </div>
  )
};

export default CointdetailsPage;