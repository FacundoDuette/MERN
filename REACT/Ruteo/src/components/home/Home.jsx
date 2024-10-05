import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <main>
            <h1>Bienvenido a la Galeria de Arte Futurista</h1>
            <Link to="/Art/1231">Imagen 1</Link>
            <Link to="/Art/1232">Imagen 2</Link>
            <Link to="/Art/1233">Imagen 3</Link>
            <Link to="/Art/1234">Imagen 4</Link>
            <Link to="/Art/1235">Imagen 5</Link>
            <Link to="/Art/1236">Imagen 6</Link>
        </main>
        </>
    );
};
export default Home;