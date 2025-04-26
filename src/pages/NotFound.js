import React from "react";
import { Link } from "react-router";







const NotFound = () => {

    return (
        <div className="container mt-5">
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary mt-4">Go back Home</Link>

        </div>
    );
}

export default NotFound;