import './App.css';

import { useState } from "react";
import Home from './Pages/Home';
import { CurrencyContext } from './Context/CurrencyContext';

function App(){

  const [Currency, setCurrency] = useState() 

  return (
    <>
    <CurrencyContext.Provider value={{ Currency, setCurrency }}>
     <Home />
     </CurrencyContext.Provider>
    </>
  );
}

export default App;