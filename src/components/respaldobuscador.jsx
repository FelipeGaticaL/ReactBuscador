import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const BuscadorColaborador = (props) => {
    /* const [datoConsulta, SetDatoConsulta] = useState(null)  
    const buscador = (e) => {
    console.log("buscador");
    consulta();
  };
  const consulta = (e) => {
    console.log(e.target.value);
    return e.target.value; */
  

  const [busqueda, setBusqueda] = useState("");

  let handleChange= e => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
      console.log(e.target.value);
  }

  const filtrar=(terminoBusqueda) => {
      var resultadosBusqueda = props.colaboradores.filter((props.colaborador))
      if(props.colaborador.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ||props.colaborador.correo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return props.colaborador;  
        }
  
      props.setColaboradores(resultadosBusqueda);
};
  return (
    <>
      <h3>Buscador</h3>
     
        <div className="input-group">
          <input
            onChange={handleChange}
            value={busqueda}
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
