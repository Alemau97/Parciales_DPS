import React, {useState} from 'react';
import './clinica.css';
import { Form } from './components/Form';
import { Results } from './components/Results';

function Clinica() {
  const [pacientes, setPaciente] = useState([
    {
        nombre: 'Cristiano',
        apellido: 'Ronaldo',
        sexo: 'Hombre',
        dui: '1234567-8',
        nacimiento: "08/09/2022",
        nacionalidad: "Portugués",
        dirección: "Las Campaneras",
        departamento: "San Salvador",
        municipio: "Soyapango",
    }
  ]);

  const getData = (data) => {
    console.log("Coming from the Form",data);
    const pacientesActuales = pacientes;
    setPaciente([...pacientesActuales, data]);
  }

  return (
    <div className="Clinica">
      <Form onSubmit={getData}/>
      {
        pacientes.map((datos, index) => (
          <Results datos={datos} key={index}/>
        ))
      }
    </div>
  );
}

export default Clinica;
