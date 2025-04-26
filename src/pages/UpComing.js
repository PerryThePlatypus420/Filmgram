import React from "react";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";


const UpComing = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchMovies();
    }, [apiKey]);

    if (loading) {
        return <div className="mt-5 fw-bold fs-1">Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (movies.length === 0) {
        return <div>No movies found</div>;
    }

    return (
        <div className="container-fluid mt-5 px-5">
            <h2>Up Coming</h2>
            <MoviesList movies={movies} />
        </div>
    );
}

export default UpComing;