const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')

app.use(cors())
//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let movies = [
    {
        id: 1,
        title: "Rápidos y Furiosos",
        description: "Es una película de acción y ficción.",
        image: "https://i0.wp.com/cinemedios.com/wp-content/uploads/2023/05/rapidos-y-furiosos.png?fit=1200%2C675&ssl=1",
        ratings: {
            theMovieDb: 7.5,
            rottenTomatoes: "85%",
            metacritic: "75"
        },
    },
    {
        "id": 2,
        "title": "La Última Esperanza",
        "description": "Una emocionante película de ciencia ficción que narra la lucha por la supervivencia de la humanidad.",
        "image": "https://play-lh.googleusercontent.com/2OagjaArrdTUA6tP_YaJCjRjFgQq05xrzZfxGUrbt2rL7EQTWwcZsmoO2I9BU3R6Ojt58w",
        "ratings": {
            "theMovieDb": 8.2,
            "rottenTomatoes": "92%",
            "metacritic": "88"
        }
    },
    {
        "id": 3,
        "title": "El Secreto del Tiempo",
        "description": "Una película de aventuras y misterio que sigue la búsqueda de un artefacto antiguo capaz de controlar el tiempo.",
        "image": "https://tintalibre.com.ar/_admin/html/upload/libros/26.png",
        "ratings": {
            "theMovieDb": 8.0,
            "rottenTomatoes": "87%",
            "metacritic": "82"
        }
    },
    {
        "id": 4,
        "title": "Rapido El Secreto del Tiempo",
        "description": "Una película de aventuras y misterio que sigue la búsqueda de un artefacto antiguo capaz de controlar el tiempo.",
        "image": "https://tintalibre.com.ar/_admin/html/upload/libros/26.png",
        "ratings": {
            "theMovieDb": 8.0,
            "rottenTomatoes": "87%",
            "metacritic": "82"
        }
    }

];

//Nuestro primer WS Get
app.get('/', (req, res) => {

    res.json({ results: movies });
})
app.get('/SearchMovie/:nombre', (req, res) => {
    const movieNombre = quitarTildes(req.params.nombre.toLowerCase());
    const foundMovie = movies.filter(movie => quitarTildes(movie.title.toLowerCase()).includes(movieNombre));
  
    if (foundMovie) {
        res.json({ results: foundMovie });
    } else {
        res.status(404).json({ message: 'Película no encontrada' });
    }
})
app.get('/Ratings/:id', (req, res) => {
    const movieId = req.params.id;
    const foundMovie = movies.find(movie => movie.id == movieId);

    if (foundMovie) {
        res.json(foundMovie.ratings);
    } else {
        res.status(404).json({ message: 'Película no encontrada' });
    }
})

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }