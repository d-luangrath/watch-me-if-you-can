import { useState, useEffect } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
     .get("/api/movies")
     .then((res) => {
       setMovies(res.data);
     })
     .catch((err) => {
      console.log(err);
     });
  }, []);

  const addMovie = (newMovie) => {
    axios
      .post("/api/movies", newMovie)
      .then((res) => {
        setMovies(res.data);
        setShowForm(false);
      })
      .catch((err) => {
        alert("Error adding movie. Please try again.");
        console.log(err);
      });
  };

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
