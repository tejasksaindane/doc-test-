<!-- Movielist  -->

import React from "react";

const MoviesList =({movies}) =>{
    return(
        <div>
        <h2>Movies</h2>
        <ul>{
            movies.map(movie =>
            <li key={movie.id}>
            {movie.title}
            </li>
            )
        }
        </ul>
        </div>
    )
}
export default MoviesList;

<!-- Components to display movie details -->

import React for "react"

const MovieDetail = ({movie})=>{
return(
    <div>
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    </div>
)
}
export default MovieDetail;

<!-- App.js -->

import React from "react"
import MoviesList from "./MovieList"
import MovieDetails from "./MovieDetail"
import moviesData from "./movies.json"

const app = () =>{
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    }

    return(
        <div>
        <h1>Netflix Like App</h1>
        <div style={{display:"flex"}}>
        <MovieList movies={moviesData} onMovieClick={handleMovieClick}>
        {selectedMovie}
        </div>
    )
}

export default App;