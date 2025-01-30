import { ConfigRouteProps } from "../types";
import AccordionArticle from "@/pages/ComponentsPage/Accordion";
import ButtonArticle from "@/pages/ComponentsPage/Button";
import ComponentsPage from "@/pages/ComponentsPage";
import LearnPage from "@/pages/ComponentsPage/LearnPage";

export const ComponentsRouter = {
    Accordion: "/accordion",
    Button: "/button",
    Learn: "/learn",
};

export const componentsRouteConfig: ConfigRouteProps[] = [
    {
        path: "",
        element: <ComponentsPage content={AccordionArticle} />,
    },
    {
        path: ComponentsRouter.Accordion,
        element: <ComponentsPage content={AccordionArticle} />,
    },
    {
        path: ComponentsRouter.Button,
        element: <ComponentsPage content={ButtonArticle} />,
    },
    {
        path: ComponentsRouter.Learn,
        element: <LearnPage />,
    },
];
