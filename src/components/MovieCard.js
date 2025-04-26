import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { id, poster_path, title, vote_average, release_date } = movie;
  const year = release_date?.slice(0, 4);
  const movieUrl = `https://www.themoviedb.org/movie/${id}`;

  return (
    <a href={movieUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
      <div className="card movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="movie-img"
        />
        <div className="movie-overlay">
          <div className="movie-info">
            <h5>{title}</h5>
            <p>{year}</p>
            <p>⭐ {vote_average}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
