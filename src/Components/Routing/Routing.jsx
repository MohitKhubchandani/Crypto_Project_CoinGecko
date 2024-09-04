import Home from '../../Pages/Home';
import CointdetailsPage from '../../Pages/CoinDetailsPage';
import { Route, Routes } from 'react-router-dom';

function Routing(){


 return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:coinId' element={<CointdetailsPage/>}/>
  </Routes>
 )
};

export default Routing;

