import PropTypes from 'prop-types'
import styles from './Personaje.module.css'
const Personaje = ({name, status, species, gender, location, image})=>{
    return (
        <div className={styles.card}>
            <img src={image}/>
            <h3>{name}</h3>
            <p>Estado: {status}</p>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>
            <p>Localidad: {location.name}</p>
        </div>
    );
};

Personaje.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired
};

export default Personaje;
