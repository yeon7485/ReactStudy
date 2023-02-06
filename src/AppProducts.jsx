import React from "react";
import Products from "./components/Products";
import { useState } from "react";

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
            {showProducts && <Products />}
            <button onClick={() => setShowProducts((show) => !show)}>
                Toggle
            </button>
        </div>
    );
}
