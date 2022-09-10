import React from "react";
import '../App.css';
import { ResultadoGramos } from "./ResultadoGramos";

export const LibrasGramos = () => {
    return(
        <>
            <div className="calc-container">
                <h2 className="comp-title">Convertor de Libras a Gramos</h2>
                <div className="form-container">
                    <form>
                        <label for="libras">Ingrese el valor en Libras:</label>
                        <input type="text" id="libras" className="get-libras-to-gram" placeholder="Cant. Libras"/>
                    </form>
                </div>
                <div className="result-container">
                    <ResultadoGramos />
                </div>
                <div className="calcular-container">
                    <button type="button" className="calcular">Calcular</button>
                </div>
            </div>
        </>
    )
}