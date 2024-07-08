import React, { useState } from "react";
import MovieCard from "./MovieCard";

function Movies({movies}) {
  
  return (
    <div className="movie-container">
      <h1>Movies</h1>
        <div className="movie-list">
          {movies.map((movie) => {
            return <MovieCard 
              movie={movie}
              key={movie.id}
              // editMovie={editMovie}
              // deleteMovie={deleteMovie}
              />
          })}
      </div>
    </div>
  )
}

export default Movies;