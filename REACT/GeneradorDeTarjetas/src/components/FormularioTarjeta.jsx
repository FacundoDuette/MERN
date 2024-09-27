import { useState } from "react";

const FormularioTarjeta = ({listaTarjetas, setListaTarjetas}) =>{
    const [titulo, setTitulo]=useState("");
    const [descripcion, setDescripcion]=useState("");
    const [color, setColor]=useState("#000000");
    const [borde, setBorde]=useState("solid");
    
    const agregarTarjeta = (e) => {
        e.preventDefault();
        const nuevaTarjeta = {
            titulo,
            descripcion,
            color,
            borde
        };
        setListaTarjetas([...listaTarjetas, nuevaTarjeta ]);
        setTitulo("");
        setDescripcion("");
        setColor("#000000");
        setBorde("solid");
    };

    return(
        <form id="formTarjeta" onSubmit={agregarTarjeta} className="formulario-tarjeta">
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <label htmlFor="descripcion">Descripción</label>
            <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            <label htmlFor="color">Color de la tarjeta</label>
            <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <label htmlFor="borde">Tipo de borde</label>
            <select id="borde" value={borde} onChange={(e)=>{setBorde(e.target.value)}}>
                <option value="solid">solid</option>
                <option value="dotted">dotted</option>
                <option value="dashed">dashed</option>
                <option value="double">double</option>
                <option value="groove">groove</option>
                <option value="ridge">ridge</option>
                <option value="inset">inset</option>
                <option value="outset">outset</option>
                <option value="hidden">hidden</option>
                <option value="none">none</option>
            </select>
            <button className="boton-añadir">Añadir</button>
        </form>
    );
}; 
export default FormularioTarjeta;