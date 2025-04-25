import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BsFilm } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const MyNav = () => {
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


    return (
        <>
            <nav className="navbar p-2 navbar-expand-lg navbar-dark bg-dark px-3">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand fs-3 fw-bold d-flex flex-row justify-content-center align-items-center gap-3"
                        to="/"
                        style={{ color: "white" }}
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
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid fs-5 p-3 pe-5" style={{ backgroundColor: "rgba(36, 39, 51, 0.75)" }}>
                <div className="row justify-content-between gx-5 align-items-center">
                    <div className="col-md-3 col-sm-12 mb-2">
                        <form className="d-flex flex-row gap-3 justify-content-center align-items-center" onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Search for movies..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ borderRadius: "20px", paddingLeft: "15px" }}
                            />
                            <BsSearch className="fs-4" />
                        </form>
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <div className="row justify-content-end gx-3">
                            <div className="col-auto">
                                <p className="mb-0" style={{ cursor: "pointer" }}>8+ star</p>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0" style={{ cursor: "pointer" }}>7+ star</p>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0" style={{ cursor: "pointer" }}>6+ star</p>
                            </div>
                            <div className="col-auto">
                                <select className="form-select form-select-sm" style={{ cursor: "pointer" }} aria-label="Sort Select">
                                    <option>SortBy</option>
                                    <option>Date</option>
                                    <option>Rating</option>
                                </select>
                            </div>
                            <div className="col-auto">
                                <select className="form-select form-select-sm" style={{ cursor: "pointer" }} aria-label="Order Select">
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyNav;
