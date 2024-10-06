const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.get('/cancion', (req, res) => {
    const cancion = {
        id: faker.database.mongodbObjectId(),
        titulo: faker.music.songName(),
        artista: faker.person.firstName(),
        album: faker.lorem.words(3),
        duracion: faker.number.int({ min: 120, max: 400 }) + 's',
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past(20).toISOString().split('T')[0]
    };

    res.json(cancion);
});

app.get('/playlist', (req, res) => {
    const numCanciones = faker.number.int({ min: 5, max: 15 });

    const canciones = Array.from({ length: numCanciones }).map(() => ({
        id: faker.database.mongodbObjectId(),
        titulo: faker.music.songName(),
        artista: faker.person.firstName(),
        album: faker.lorem.words(3),
        duracion: faker.number.int({ min: 120, max: 400 }) + 's',
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past(20).toISOString().split('T')[0]
    }));

    const playlist = {
        idPlaylist: faker.database.mongodbObjectId(),
        nombre: faker.lorem.words(2),
        descripcion: faker.lorem.sentence(),
        canciones,
        creador: faker.person.firstName(),
        fechaCreacion: faker.date.past(5).toISOString().split('T')[0] 
    };

    res.json(playlist);
});