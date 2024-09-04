import {useState} from 'react';
import { fetchCointData } from '../../services/fetchCoinData';
import { useQuery } from 'react-query';
import {useContext} from 'react';
import { CurrencyContext } from '../../Context/CurrencyContext';
import CurrencyFormater from '../../services/CurrencyFormater';

function CoinTable() {

  const { Currency } = useContext(CurrencyContext)

  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error} = useQuery(['coin', page, Currency], () => fetchCointData(page, Currency),{
    // retry: 2,
    // retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  


  if(isError){
    return <h1 className='text-white'>Error: {error.message}</h1>
  }

     return (  
    <>


    <div className='flex flex-col my-5 items-center justify-center gap-5 w-[80vw] mx-auto'>
      <div className='w-full flex items-center justify-center bg-yellow-400 text-black py-4 px-2 font-semibold'>

        {/* Header of the table */}
        <div className='basis-[35%]'>Coin</div>
        
        <div className='basis-[25%]'>Price</div>
        
        <div className='basis-[20%]'>24 Hours Change</div>
        
        <div className='basis-[20%]'>Market Cap</div>
      </div>

      <div className='flex flex-col w-[80vw] mx-auto'>
        {isLoading && <div>Loading...</div>}
      
        {!data && <div className='flex justify-center'>
          <span className='loading loading-spinner loading-lg'></span>
          </div>}

        {data && data.map((coin) => {
          return (
            <div key={coin.id} className='w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between'>
                <div className='flex items-center justify-start gap-3 basis-[35%]'>
                  
                  <div className='w-[5rem] h-[5rem]'>
                    <img src={coin.image} className='w-full h-full' />
                  </div>
                
                  <div className='flex flex-col'>
                   <div className='text-3xl'>{coin.name}</div>
                   <div className='xl'>{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">
                  {CurrencyFormater(coin.high_24h, Currency) }
                </div>
                <div className="basis-[20%]">
                  {CurrencyFormater(coin.current_price, Currency)}
                </div>
                <div className="basis-[20%]">
                  {CurrencyFormater(coin.market_cap, Currency)}
                </div>
            </div>
          )
        })}

      </div>
      <div className='flex gap-4 justify-center items-center'>
                  <button 
                  disabled={page === 1}
                  onClick={() => {
                    setPage(page - 1),
                    window.scrollTo({ top: 540, behavior: 'auto' })
                  }} 
                  className='btn btn-primary btn-wide hover:bg-yellow-400  border-none text-black text-2xl'
                  >
                  Prev
                  </button>
                  
                  <button 
                  onClick={() => {
                    setPage(page + 1),
                    window.scrollTo({ top: 540, behavior: 'auto' })
                  }} 
                  className='btn btn-secondary btn-wide hover:bg-yellow-400 bg-blue-400 border-none text-black text-2xl'
                  >
                  Next
                  </button>
       </div>
    </div>
    
 
    </>
  
  );
};

export default CoinTable;