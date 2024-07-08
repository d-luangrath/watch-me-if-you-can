import { useState, useEffect } from "react";
import "./App.css";
import data from "../data/movies.json";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState(data.results);
  const [showForm, setShowForm] = useState(false);


  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  return (
    <div className="App">
      <Header showForm={showForm} setShowForm={setShowForm}/>
      {showForm ? (
        <MovieForm addMovie={addMovie} />
        ) : (
        <Movies movies={movies} />
      )}
    </div>
  );
}

export default App;
