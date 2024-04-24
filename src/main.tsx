import React from "react";
import ReactDOM from "react-dom/client";
import { AppDataProvider } from "@deriv-com/api-hooks";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/config.routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UIDataProvider } from "context/ui-data-context";
import "./styles/main.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppDataProvider>
                <UIDataProvider>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools initialIsOpen />
                </UIDataProvider>
            </AppDataProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
