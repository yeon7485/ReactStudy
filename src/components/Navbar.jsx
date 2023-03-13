import React from "react";
import { Link } from "react-router-dom";
import styles from "./../router/Navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/videos">Videos</Link>
        </nav>
    );
}
