import React, {useState} from "react";
import '../App.css';

export const LibrasGramos = () => {
    const [datoLibras, setdatoLibras] = useState("");

    const conversion = datoLibras * 453.592;

    return(
        <>
            <div className="calc-container">
                <h2 className="comp-title">Convertor de Libras a Gramos</h2>
                <div className="form-container">
                    <form 
                        onSubmit={e => {
                            e.preventDefault();
                            setdatoLibras(e.target.libras.value);
                            e.target.libras.value = "";
                        }}
                    >
                        <label for="libras">Ingrese el valor en Libras:</label>
                        <input type="number" className="get-libras-to-ounce" placeholder="Cant. Libras" name="libras" autoComplete="off" min="1" pattern="^[0-9]+" required/>
                        <button type="submit" className="calcular">Calcular</button>
                    </form>
                </div>
                <div className="result-container">
                    <p>Valor ingresado: <span>{datoLibras} Libras</span></p>
                    <p>Conversión: <span>{conversion} Gramos</span></p>
                </div>
            </div>
        </>
    )
}