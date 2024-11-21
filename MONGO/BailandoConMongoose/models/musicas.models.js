import {model, Schema} from 'mongoose';


const cancionSchema = new Schema({
    title: {
        type: String, 
        required: [true, 'El titulo es obligatorio'],
        minlength: [5],
        maxlength: 255
        
    },
    autor: {type: Number, required: true},
    genero: {type: String, required: true},
    duracion: [{type: String}],
    lanzamiento: {type: String, required: true }
},{ timestamps: true }); 

const canciones = model('Cancion', cancionSchema);
export default canciones;