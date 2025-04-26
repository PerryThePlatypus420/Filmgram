import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BsFilm, BsSearch } from "react-icons/bs";
import DarkModeToggle from "./DarkModeToggle";

const MyNav = ({ isDarkMode, toggleDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;

        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Network response was not ok");
            const data = await res.json();
            navigate("/search", { state: { results: data.results, query: searchTerm } });
        } catch (error) {
            console.error("Search failed:", error);
        }
    };

    const navbarClasses = `navbar p-2 navbar-expand-lg px-3 ${isDarkMode ? "navbar-dark bg-dark" : "my-light-nav"}`;

    return (
        <>
            <nav className={navbarClasses}>
                <div className="container-fluid">
                    <Link
                        className="navbar-brand fs-3 fw-bold d-flex flex-row justify-content-center align-items-center gap-3"
                        to="/"
                        style={{ color:"white"}}
                    >
                        <BsFilm />
                        <div>FilmGram</div>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse fs-5" id="navbarContent">
                        <ul className="navbar-nav ms-auto gap-4">
                            <li className="nav-item">
                                <Link className="nav-link" to="/popular">Popular</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/top-rated">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/upcoming">Up Coming</Link>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link p-0">
                                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid fs-5 p-3 pe-5" style={{ backgroundColor: isDarkMode ? "rgba(56, 72, 136, 0.5)" : "rgba(70, 136, 161, 0.34)" }}>
                <div className="row justify-content-end">
                    <div className="col-auto">
                        <form className="d-flex gap-3 align-items-center" onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                className="form-control-sm form-control"
                                placeholder="Search for movies..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ borderRadius: "20px", paddingLeft: "15px", width: "300px" }}
                            />
                            <BsSearch className="fs-4" style={{ color: isDarkMode ? "white" : "black" }} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyNav;
