import React, {useState} from 'react';
import './App.css';
import { Form } from './components/Form';
import { Results } from './components/Results';

function App() {
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
    <div className="App">
      <Form onSubmit={getData}/>
      {
        pacientes.map((datos, index) => (
          <Results datos={datos} key={index}/>
        ))
      }
    </div>
  );
}

export default App;
