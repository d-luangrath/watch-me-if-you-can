import React from 'react'

function MovieCard({movie}) {

  return (
    <div>MovieCard
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.releaseDate}</p>
    </div>
  )
}

export default MovieCard