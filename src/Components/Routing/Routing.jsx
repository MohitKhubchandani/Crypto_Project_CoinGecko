import Home from '../../Pages/Home';
import CointdetailsPage from '../../Pages/CoinDetailsPage';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../Pages/Layout';

function Routing(){


 return (
  <Routes>
    <Route path='/' element={<MainLayout/>}>
    
    <Route index element={<Home/>}/>
    <Route path='/details/:coinId' element={<CointdetailsPage/>}/>
    </Route>
  </Routes>
 )
};

export default Routing;

