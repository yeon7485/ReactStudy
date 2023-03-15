import React, { useEffect } from "react";
import { useState } from "react";
import useProducts from "./../hooks/use-products";
import { useQuery } from "@tanstack/react-query";

export default function QueryProducts() {
    const [checked, setChecked] = useState(false);
    const {
        isLoading,
        error,
        data: products,
    } = useQuery(["products"], async () => {
        console.log("fetching.....");
        const res = await fetch(`data/products.json`);
        return await res.json();
    });
    //const [loading, error, products] = useProducts({ salesOnly: checked });
    const handleChange = () => setChecked((prev) => !prev);

    if (isLoading) return <p>Loading...</p>;
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
