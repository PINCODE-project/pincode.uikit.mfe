import { ConfigRouteProps } from "../types";
import IntroductionPage from "@/pages/IntroductionPage";
import { componentsRouteConfig } from "@/router/routes/components";
import ComponentsPage from "@/pages/ComponentsPage";
import InstallationPage from "@/pages/InstallationPage";

export const ArticlesRouter = {
    IntroductionPage: "/",
    Button: "/button",
    Learn: "/learn",
    InstallationPage: "/installation",
    ComponentsPage: "/components",
};

export const articlesRouteConfig: ConfigRouteProps[] = [
    {
        path: ArticlesRouter.IntroductionPage,
        element: <ComponentsPage content={IntroductionPage} />,
    },
    {
        path: ArticlesRouter.ComponentsPage,
        children: componentsRouteConfig,
    },
    {
        path: ArticlesRouter.InstallationPage,
        element: <ComponentsPage content={InstallationPage} />,
    },
];
