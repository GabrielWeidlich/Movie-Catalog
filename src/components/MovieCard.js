import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
            <img
            src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : 'https://via.placeholder.com/150'}
            alt={movie.title}
            className="movie-poster"
            />
        </Link>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
        </div>
    );
}

export default MovieCard;   