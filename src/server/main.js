import express from "express";
import ViteExpress from "vite-express";
import data from "../data/movies.json" assert { type: 'json' } ;
import controllerFuncs from "./moviesController";


const app = express();

app.use(express.json());

const { getMovies, postMovie, putMovie, deleteMovie } = controllerFuncs;

app.get("/api/movies", getMovies);

app.post("/api/movies", postMovie);

app.put("/api/movies/:id", putMovie);

app.delete("/api/movies/:id", deleteMovie);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
