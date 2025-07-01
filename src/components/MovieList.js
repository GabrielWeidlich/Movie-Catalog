import React from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';

const MovieList = ({ movies, title }) => {
    return (
        <div className="movie-list-container">
            <h2 className="movie-list-title">{title}</h2>
            <div className="movie-list">
                {
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                )}
            </div>
        </div>
    )
}

export default MovieList;