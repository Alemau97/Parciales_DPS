import React from 'react'
import '../styles/components/result.css'

export const Results = ({datos}) => {
  return (
    <>
        <div className='infoPaciente'>
            <div className='itemResult'>
                <p className='labelText'>Nombre </p>
                <p className='infoText'>{datos.nombre}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Apellidos </p>
                <p className='infoText'>{datos.apellido}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Sexo </p>
                <p className='infoText'>{datos.sexo}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Dui </p>
                <p className='infoText'>{datos.dui}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Nacimiento </p>
                <p className='infoText'>{datos.nacimiento}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Nacionalidad </p>
                <p className='infoText'>{datos.nacionalidad}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Dirección </p>
                <p className='infoText'>{datos.dirección}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Departamento </p>
                <p className='infoText'>{datos.departamento}</p>
            </div>
            <div className='itemResult'>
                <p className='labelText'>Municipio </p>
                <p className='infoText'>{datos.municipio}</p>
            </div>
        </div>
    </>
  )
}
