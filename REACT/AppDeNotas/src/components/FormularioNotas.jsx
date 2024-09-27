import { useState } from "react";
import PropTypes from 'prop-types';

const FormularioNotas = ({listaNotas, setListaNotas}) => {
    const [nota, setNota]= useState("");
    const [prioridad, setPrioridad]=useState("baja");
    const agregarNota = (e) => {
        e.preventDefault();
        const nuevaNota = {
            nota,
            prioridad
        };
        setListaNotas([...listaNotas, nuevaNota]);
        setNota("");
        setPrioridad("baja");

    };
    return(
        <form onSubmit={agregarNota}>
            <input type="text" placeholder="Escribe tu nota" value={nota} onChange={(e)=>{setNota(e.target.value)}} />
            <select id="prioridad" onChange={(e)=>{setPrioridad(e.target.value)}} value={prioridad}>
                <option value="baja">baja</option>
                <option value="media">media</option>
                <option value="alta">alta</option>
            </select>
            <button>Agregar Nota</button>
        </form>
    );
};
FormularioNotas.propTypes = {
    listaNotas: PropTypes.arrayOf(
      PropTypes.shape({
        nota: PropTypes.string.isRequired,
        prioridad: PropTypes.string.isRequired,
      })
    ).isRequired,
    setListaNotas: PropTypes.func.isRequired
};
export default FormularioNotas;