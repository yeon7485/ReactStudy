import React from "react";
import "./AppQuery.css";
import MainProducts from "./query/MainProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AppQuery() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainProducts />
        </QueryClientProvider>
    );
}
