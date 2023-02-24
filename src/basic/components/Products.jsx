import React, { useEffect } from "react";
import { useState } from "react";
import useProducts from "./../../hooks/use-products";

export default function Products() {
    const [checked, setChecked] = useState(false);
    // salesOnly인지 아닌지를 check라는 상태값으로 전달
    const [loading, error, products] = useProducts({ salesOnly: checked });
    const handleChange = () => setChecked((prev) => !prev);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <input
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={handleChange}
            />
            <label htmlFor="checkbox">Show only sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}
