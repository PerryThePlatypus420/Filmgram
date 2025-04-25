import React from "react";
import { Link } from "react-router";
import { BsFilm } from "react-icons/bs";

const MyNav = () => {
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
                <div className="row justify-content-end gx-5">
                    <div className="col-auto">
                        <p className="mb-0">8+ star</p>
                    </div>
                    <div className="col-auto">
                        <p className="mb-0">7+ star</p>
                    </div>
                    <div className="col-auto">
                        <p className="mb-0">6+ star</p>
                    </div>
                    <div className="col-auto">
                        <select className="form-select form-select-sm" aria-label="Sort Select">
                            <option>SortBy</option>
                            <option>Date</option>
                            <option>rating</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <select className="form-select form-select-sm" aria-label="Order Select">
                            <option>Ascending</option>
                            <option>Descending</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyNav;
