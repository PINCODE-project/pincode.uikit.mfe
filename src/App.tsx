import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import Layout from "@/components/Layout";
import "./styles/globals.scss";
import { Toaster } from "@/components/ui/toaster";

export default function MyApp() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter element={<Layout />} />
                <Toaster />
            </BrowserRouter>
        </div>
    );
}
