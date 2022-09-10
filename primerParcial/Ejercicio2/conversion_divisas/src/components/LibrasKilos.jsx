import React from "react";
import '../App.css';
import { ResultadoKilos } from "./ResultadoKilos";

export const LibrasKilos = () => {
    return(
        <>
            <div className="calc-container">
                <h2 className="comp-title">Convertor de Libras a Kilogramos</h2>
                <div className="form-container">
                    <form>
                        <label for="libras">Ingrese el valor en Libras:</label>
                        <input type="text" id="libras" className="get-libras-to-kg" placeholder="Cant. Libras"/>
                    </form>
                </div>
                <div className="result-container">
                    <ResultadoKilos />
                </div>
                <div className="calcular-container">
                    <button type="button" className="calcular">Calcular</button>
                </div>
            </div>
        </>
    )
}