import React, { useState } from "react";

function MovieCard({movie}) {

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;