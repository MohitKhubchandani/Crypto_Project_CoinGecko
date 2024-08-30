import {useState, useEffect} from 'react';
import { fetchCointData } from '../Navbar/fetchCoinData';
import { useQuery } from 'react-query';

function CoinTable() {

  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error} = useQuery(['coin', page], () => fetchCointData(page, 'usd'),{
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log(data);
  }, [data])

  if(isLoading){
    return <div>Loading...</div>
  };
  if(isError){
    return <div>Error: {error.message}</div>
  };


  return (  
    <>
    <div>CoinTable <button onClick={() => setPage(page + 1)}>Click</button> {page}</div>
    </>
  );
};

export default CoinTable;