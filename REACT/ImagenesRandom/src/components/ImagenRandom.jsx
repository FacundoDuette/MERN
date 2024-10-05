import { useEffect, useState } from "react";
import axios from "axios";

const ImagenRandom = () => {
    const [imagen, setImagen]=useState("");
    const url = 'https://api.pexels.com/v1/curated';
    const paginaAleatoria = ()=> Math.floor(Math.random() * 100) + 1;
    const obtenerImagen = async () =>{
        try {
            const respuesta = await axios.get(url, {
                headers: {
                    'Authorization': 'dU51jinJ7KBga2qYXNg7PacTNQsr9ICw5JenqEZ6925ZsPt8T0MLh2qb'
                  },
                params: {
                  per_page: 1, // Número de imágenes que deseas obtener
                  page: paginaAleatoria()
                }
              });
            //console.log(respuesta.data.photos); 
            setImagen(respuesta.data.photos[0].src.large);       
        } catch (error) {
            console.error('Error al hacer la consulta:', error);
        }
    };
    
    
    
    useEffect(()=>{
        obtenerImagen();
        // eslint-disable-next-line
    }, []);
    return(
        <div className="card">
            <h1>Random Image</h1>
            <img src={imagen} alt="Random Image"/>
            <button className="btn" onClick={obtenerImagen}>Fetch New Random Image</button>
        </div>
    );
};
export default ImagenRandom;