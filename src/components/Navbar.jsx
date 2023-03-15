import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 text-2xl">
            <Link to="/">Home</Link>
            <Link to="/videos">Videos</Link>
        </nav>
    );
}
