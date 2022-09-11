import React, {useState} from 'react';
import '../styles/components/form.css';

export const Form = (props) => {
    const [numValue, setNumValue] = useState('');
    const [textValue, setTextValue] = useState('');

    const handleNumber = (e) => {
        const justNumbers = e.target.value.replace(/\D/g, '');

        setNumValue(justNumbers);
    }

    const handleText = (e) => {
        const justText = e.target.value.replace(/[^a-z ]/gi, '');

        e.target.value = justText;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const arrayInfo = e.target;

        if(arrayInfo === ""){
            alert("Llene todos los campos necesarios");
        }
        const objetoTempo = {
            nombre: arrayInfo[0].value,
            apellido: arrayInfo[1].value,
            sexo: arrayInfo[2].value,
            dui: arrayInfo[3].value,
            nacimiento: arrayInfo[4].value,
            nacionalidad: arrayInfo[5].value,
            dirección: arrayInfo[6].value,
            departamento: arrayInfo[7].value,
            municipio: arrayInfo[8].value,
        }
        props.onSubmit(objetoTempo);
    }

    const validatingText = (e) => {
        const comparing = e.target.value;
        var letters = /^[A-Za-z]+$/;
        if(comparing.match(letters)){
            return false;
        }
    }

    return (
        <>
            <form action="" className='formComponent' onSubmit={handleSubmit} >
                <h2>Ingrese los datos del paciente</h2>
                <div className='inputsContainer'>
                    <div className='inputItem'>
                        <label htmlFor="">Nombres: </label>
                        <input type="text" name='nombresInput' placeholder='Nombre' id='nombresInput' onChange={handleText} required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Apellidos: </label>
                        <input type="text" name='apellidosInput' placeholder='Apellidos' id='apellidosInput' onChange={handleText} required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Sexo: </label>
                        <select name='sexoInput' id='sexoInput'>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">DUI: </label>
                        <input type="text" name='duiInput' placeholder='DUI' id='duiInput' maxLength={8} onChange={handleNumber} 
                        value={numValue}  required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Fecha de nacimiento: </label>
                        <input type="date" name='nacimientoInput' id='nacimientoInput' required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Nacionalidad: </label>
                        <input type="text" name='nacionalidadInput' placeholder='País' id='nacionalidadInput' onChange={handleText} required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Dirección</label>
                        <input type="text" name='direccionInput' placeholder='Dirección' id='direccionInput' required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Departamento</label>
                        <input type="text" name='departamentoInput' placeholder='Departamento' id='departamentoInput' onChange={handleText} required/>
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="">Municipio</label>
                        <input type="text" name='municipioInput' placeholder='Municipio' id='municipioInput' onChange={handleText} required/>
                    </div>
                </div>
                <button className='submitButton' type='submit'>Registrar</button>
            </form>
        </>
    )
}
