import styles from './Home.module.css';
const Home = ()=>{
    return (
        <>
        <div className={styles.home}>
            <h1>Bienvenido a la APP especializada en Rick y Morty</h1>
            <p>Esta app te permitirá conocer todos los personajes de Rick y Morty, sus habitaciones, y sus apariciones en el mundo fantástico.</p>
        </div>
        </>
    );
};

export default Home;