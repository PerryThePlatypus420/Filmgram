import React from "react";
import { useLocation } from "react-router";
import MoviesList from "../components/MoviesList";

const SearchResults = () => {
    const location = useLocation();
    const { results = [], query = "" } = location.state || {};

    return (
        <div className="container-fluid mt-5 px-5">
            <h3 className="mb-5">
                Search results for: <strong>{query}</strong>
            </h3>

            {results.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <MoviesList movies={results} />
            )}
        </div>
    );
};

export default SearchResults;
