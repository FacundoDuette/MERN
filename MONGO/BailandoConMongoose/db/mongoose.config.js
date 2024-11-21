import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL_MONGO = process.env.MONGO_URL;

const conectarDB = async ()=>{
    try {
        await mongoose.connect(URL_MONGO, {
            dbName: "MusicasAPI",
        })
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error('Error al coectar con la base de datos',  error);
        throw error;
    }
};

export default conectarDB;