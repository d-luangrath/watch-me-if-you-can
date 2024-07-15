import express from "express";
import ViteExpress from "vite-express";
import data from "../data/movies.json" assert { type: 'json' } ;


const app = express();

app.set(express.json());

movieId = movies.length + 1;

const movies = data.results;

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
})

app.post("/api/movies", (req, res) => {
  const { newMovie } = req.body;
  const movieWithId = {... newMovie, id: movieId};
  movies.push(movieWithId);
  movieId++;

  res.status(201).json(movies);

});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
