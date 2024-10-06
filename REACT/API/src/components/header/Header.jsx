import {useState} from 'react'
import styles from './Header.module.css'
import axios from 'axios'
import { useNavigate } from'react-router-dom';
const Header = ()=>{
    
    const [valor, setValor] = useState('');
    const [selector, setSelector] = useState('name');

    const URL = `https://rickandmortyapi.com/api/character/`;

    const navegar = useNavigate();
    const buscar = async ()=>{
        let name, location = 'all';
        let id = 0;
        if(selector==='name'){
            name = valor;
            let filtroURL = URL+'?name='+name;
            try {
                const respuesta = await axios.get(filtroURL);
                navegar(`./content/${name}/${id}/${location}`, { state: { data: respuesta.data } });
            } catch (error) {
                console.error('Error al buscar:', error);
            }
        }else if (selector==='id'){
            id = valor;
            let filtroURL = URL+'/'+id;
            try {
                const respuesta = await axios.get(filtroURL);
                navegar(`./content/${respuesta.data.name}/${id}/${respuesta.data.location.name}`, { state: { data: { results: [respuesta.data] } } });
            } catch (error) {
                console.error('Error al buscar:', error);
            }
        }
    };

    return(
        <>
        <div className={styles.header}>
            <h2>BUSCAR</h2>
            <select className={styles.select} onChange={(e)=>{setSelector(e.target.value)}} value={selector}>
                <option value="name">Nombre</option>
                <option value="id">ID</option>
            </select>
            <input type="text" className={styles.input} placeholder="Buscar..." value={valor} onChange={(e)=>setValor(e.target.value)} />
            <button className={styles.btn} onClick={buscar}>Buscar</button>
        </div>
        </>
    );
};

export default Header;