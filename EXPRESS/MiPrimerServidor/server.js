const express = require('express');
const app = express();

const puerto = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
  });

app.listen(puerto, ()=>{
    console.log('El servidor esta activo en el puerto 8080');
});