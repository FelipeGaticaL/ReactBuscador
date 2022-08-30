import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormColaborador = (props) => {


  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const capturarNombre = (e) => { 
        setNombre(e.target.value);
  }
  const capturarCorreo = (e) => setCorreo(e.target.value);

  const guardarColaboradorForm = (e) => {
      e.preventDefault();

      const colaborador = {
          id: Date.now(),
          nombre: nombre,
          correo: correo,
      }
      props.guardarColaborador(colaborador);
      
   
  }

  return (
    <>
      <Form onSubmit={guardarColaboradorForm}>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            value={nombre}
            onChange={capturarNombre} 
            type="text" 
            placeholder="Ingrese nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección correo electrónico</Form.Label> 
          <Form.Control 
            value={correo} 
            onChange={capturarCorreo} 
            type="email"
            placeholder="Ingrese correo" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> 
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
};

export default FormColaborador;
