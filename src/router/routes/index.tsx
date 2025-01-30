import { ConfigRouteProps } from "../types";
import { articlesRouteConfig } from "@/router/routes/articles";
import { LoginForm } from "@pin-code/uikit.lib";

export const routeConfig: ConfigRouteProps[] = [
    {
        path: "/login",
        element: (
            <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <LoginForm
                        type="email"
                        onSubmit={(data: any) => {
                            console.log(data);
                        }}
                        onRegister={() => console.log("register")}
                        image="https://images.hdqwalls.com/download/mountain-reflections-3840x2400.jpg"
                    />
                </div>
            </div>
        ),
    },
    ...articlesRouteConfig,
    {
        path: "*",
        element: <div>error</div>,
    },
];
