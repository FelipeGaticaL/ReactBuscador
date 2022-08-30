import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import { useEffect,useState } from 'react';
import FormColaborador from "./components/FormColaborador";
import TablaColaborador from "./components/TablaColaborador";
import BuscadorColaborador from "./components/BuscadorColaborador";

function App() {
  
  let peticionGet = ()=>{
    

  }

  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
 //console.log(colaboradores)
  
 //Guardar nuevos colaboradores
 const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    
  }
  //El fitro de colaboradores
  const pull_data = (data) => {
    console.log(data)
  }

  useEffect(()=>{
    peticionGet();
    },[])
  
    
  return (
    <>
      <BuscadorColaborador
        colaboradores={colaboradores}
        getColaboradores = {pull_data}
      />
      <FormColaborador
        guardarColaborador= {guardarColaborador}
      />
      <TablaColaborador 
        colaboradores={colaboradores}
       
      />
     {/* <ul>
        {colaboradores.map((colaborador)=> (
           <li key={colaborador.id}>{colaborador.nombre} <button onClick={eliminarColaborador}>X </button> </li>
        ))}
      </ul> */}
    </>
  );
}
export default App;
