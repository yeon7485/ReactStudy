import React, { useState } from "react";
import QueryProducts from "./QueryProducts";

export default function MainProducts() {
    const [showLeftProducts, setShowLeftProducts] = useState(true);
    const [showRightProducts, setShowRightProducts] = useState(true);
    return (
        <main className="container">
            <div>
                {showLeftProducts && <QueryProducts />}
                <button onClick={() => setShowLeftProducts((show) => !show)}>
                    Toggle
                </button>
            </div>
            <div>
                {showRightProducts && <QueryProducts />}
                <button onClick={() => setShowRightProducts((show) => !show)}>
                    Toggle
                </button>
            </div>
        </main>
    );
}
