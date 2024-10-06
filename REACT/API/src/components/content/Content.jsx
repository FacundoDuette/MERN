import { useLocation } from 'react-router-dom';
import Personaje from '../Personaje/Personaje';
import styles from './Content.module.css';
const Content = () => {
    const location = useLocation();
    const { data } = location.state || {}; // Obteniendo el estado pasado
    console.log(data); //
    return (
        <div className={styles.content}>
            {/* Itera sobre las propiedades de data si es un objeto */}
            {data && typeof data === 'object' ? (
                Object.keys(data.results).map((key) => (
                    
                    <Personaje  key={key} 
                                name={data.results[key].name} 
                                species={data.results[key].species} 
                                gender={data.results[key].gender} 
                                location={data.results[key].location} 
                                status={data.results[key].status}
                                image={data.results[key].image}  />
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </div>
    );
};

export default Content;