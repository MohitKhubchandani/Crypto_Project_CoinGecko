import './App.css';

import { useState } from "react";
import { CurrencyContext } from './Context/CurrencyContext';
import Routing from './Components/Routing/Routing';

function App(){

  const [Currency, setCurrency] = useState() 

  return (
    <>
    <CurrencyContext.Provider value={{ Currency, setCurrency }}>
     <Routing />
     </CurrencyContext.Provider>
    </>
  );
}

export default App;