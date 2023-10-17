import { useState } from "react";
import Rotas from "./Rotas/Rotas";
import { GlobalStyle } from "./Globalstyle";





function App(){
  const [novo, setNovo] = useState([])

  return(
    <>
    <GlobalStyle/>
   
      <Rotas 
      novo={novo}
      setNovo={setNovo}
      />
    </>
  )
}

export default App