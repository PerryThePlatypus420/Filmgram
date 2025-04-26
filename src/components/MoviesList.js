import React from "react";
import MovieCard from "../components/MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div className="container-fluid">
      <div className="row mt-4 mb-5 gx-4 gy-4 justify-content-center">
        {movies.map((movie) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            key={movie.id}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
