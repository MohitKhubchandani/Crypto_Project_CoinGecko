import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../Pages/Layout';
import { lazy , Suspense} from 'react';

const Home = lazy(() => import('../../Pages/Home'))
const CoinDetailsPage = lazy(() => import('../../Pages/CoinDetailsPage'))

function Routing(){


 return (
  <Routes>
    <Route path='/' element={<MainLayout/>}>
    
    <Route index element={
  
      <Suspense fallback={ 
      <>
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      </>
      }>

            <Home/>

      </Suspense>

    } />
    <Route path='/details/:coinId' element={
      

      <Suspense fallback={
        <>
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
        </>
      }>

        <CoinDetailsPage/>
      
      </Suspense>
      } />
    </Route>
  </Routes>
 )
};

export default Routing;

