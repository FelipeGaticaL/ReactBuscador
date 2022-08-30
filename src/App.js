import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from 'react';
import FormColaborador from "./components/FormColaborador";
import TablaColaborador from "./components/TablaColaborador";
import BuscadorColaborador from "./components/BuscadorColaborador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [busqueda, setBusqueda]= useState([]);

 //Guardar nuevos colaboradores
 const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    
  }
  
  
  //El fitro de colaboradores
  const pull_data = (data) => {
    let busqueda = [] //-> Reseteamos la array cada vez que se ejecute
    setBusqueda([...busqueda, data])

  };

    
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
        BuscadorColaborador = {busqueda}
       
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
