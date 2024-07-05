import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Movies from "./components/Movies";

const moviesData = {
  results: [
      {
          title: 'Movie 1',
          overview: 'Good',
          image: '',
          releaseDate: ''
      }
  ]
}

function App() {
  const [movies, setMovies] = useState(moviesData.results);

  return (
    <div className="App">
      <h1>Movies</h1>
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
