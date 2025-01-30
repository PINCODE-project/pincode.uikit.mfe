import { BrowserRouter, Link, useLocation } from "react-router-dom";
import { RouterProvider, Toaster } from "@pin-code/uikit.lib";
import { AppRouter } from "./router/AppRouter";
import Layout from "@/components/Layout";
import "./styles/globals.scss";
import "@pin-code/uikit.lib/dist/static/css/main.css";

export default function MyApp() {
    return (
        <div className="App">
            <BrowserRouter>
                <RouterProvider Router={BrowserRouter} Link={Link} useLocation={useLocation}>
                    <AppRouter element={<Layout />} />
                    <Toaster />
                </RouterProvider>
            </BrowserRouter>
        </div>
    );
}
