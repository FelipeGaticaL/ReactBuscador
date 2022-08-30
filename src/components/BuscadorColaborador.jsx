import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";


const BuscadorColaborador = (props) => {

  /* function buscador(){
  

  } */

  let handleChange= e => {
    let terminoBusqueda = e.target.value
    filtrar(terminoBusqueda)

  }
  
  let filtrar = (terminoBusqueda)=>{
       
    let colaboradores = props.colaboradores
    var resultadosBusqueda=colaboradores.filter((colaborador)=>{
      if(colaborador.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){ return colaborador; }
    });
    props.getColaboradores(resultadosBusqueda)
 
  }




  return (
    <>
      <h3>Buscador</h3>
     
        <div className="input-group">
          <input
            onChange={handleChange}
            type="search"
            className="form-control rounded porte-barra"
            placeholder="Búsqueda por nombre o correo"
            aria-label="Search"
            aria-describedby="search-addon"
            
          />
          <Button
            //onClick={buscador}
            type="button"
            variant="btn btn-outline-danger"
          >
            buscar
          </Button>
        </div>
      
    </>
  );

};
export default BuscadorColaborador;
