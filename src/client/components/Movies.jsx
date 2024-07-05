
import React, {useState} from "react";
import MovieCard from './MovieCard';

function Movies({movies}) {
    return (
        <div>
            <h1></h1>
            <ul>
                {movies.map((movie, index) => {
                    return <MovieCard movie={movie} key={index}/>
                })}
            </ul>
        </div>
    )
}

export default Movies