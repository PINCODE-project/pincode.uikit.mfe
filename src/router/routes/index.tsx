import { ConfigRouteProps } from "../types";
import { componentsRouteConfig } from "@/router/routes/components";

export const routeConfig: ConfigRouteProps[] = [
    {
        path: "/components",
        // element: <div>UI Kit</div>,
        children: componentsRouteConfig,
    },
    {
        path: "/",
        element: <div>UI Kit</div>,
    },
    {
        path: "*",
        element: <div>error</div>,
    },
];
