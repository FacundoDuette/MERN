import { useState } from "react";

const FormHero = (props) => {
    const { listaHeroes, setListaHeroes } = props;
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const AgregarHeroe = (event) => {
        event.preventDefault();
        validacion();
        const nuevoHeroes = { nombre, apellido, mail, password };
        setListaHeroes({...listaHeroes, nuevoHeroes });
        
    };
    const validacion = ()=>{
        if(nombre.trim() === "" || apellido.trim() === "" || mail.trim() === "" || password.trim() === "" || password2.trim() === ""){
            alert("Todos los campos son obligatorios");
            return;
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            alert("El formato del email es incorrecto");
            return;
        }
        if(mail.length < 10){
            alert("La longitud del email debe ser minimo de 10 caracteres.");
            return;
        }
        if(password.length < 12){
            alert("La contraseña debe tener al menos 12 caracteres");
            return;
        }
        if(password.toLowerCase() === password || password.toUpperCase() === password){
            alert("La contraseña debe tener al menos una letra mayúscula y una minúscula");
            return;
        }
        if(!/[0-9]/.test(password)){
            alert("La contraseña debe tener al menos un número");
            return;
        }
        if(nombre.length < 4){
            alert("¿Qué superhéroe que se aprecie como tal tiene un nombre tan corto? Thor y Hulk tienen al menos 4 letras.");
            return;
        }
        if(password!== password2){
            alert("Las contraseñas no coinciden");
            return;
        }
        alert("Heroe creado correctamente");
        setNombre("");
        setApellido("");
        setMail("");
        setPassword("");
        setPassword2("");
    };
    return (
            <form onSubmit={AgregarHeroe}>
                <label htmlFor="nombre">
                    Nombre:
                </label>
                <input type="text" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <label htmlFor="apellido">
                    Apellido:
                </label>
                <input type="text" id="apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                <label htmlFor="mail">
                    Correo electrónico:
                </label>
                <input type="email" id="mail" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                <label htmlFor="password">
                    Contraseña:
                </label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="password2">
                    Confirmar Contraseña:
                </label>
                <input type="password" id="password2" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                <button>Crear Superheroe</button>
            </form>
        );
};
export default FormHero;