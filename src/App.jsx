import './App.css';
import CoinTable from './Components/CoinTable/CoinTable';
import BannerImage from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';

function App(){
  return (
    <>
      <Navbar />
      <BannerImage />
      <CoinTable/>
    </>
  );
}

export default App;