import * as React from "react";
import { GalleryVerticalEnd, Search } from "lucide-react";

import {
    Input,
    Label,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarNavigation,
    ThemeToggle,
} from "@pin-code/uikit.lib";
import { ComponentsRouter } from "@/router/routes/components";
import { Link } from "react-router-dom";

type NavItem = {
    title: string;
    url: string;
    subItems?: {
        title: string;
        url: string;
    }[];
    badge?: React.ReactNode;
    icon?: React.ReactNode;
};
const navItems: NavItem[] = [
    {
        title: "Добро пожаловать",
        url: "/",
        icon: "👋",
    },
    {
        title: "Установка",
        url: "/installation",
        icon: "🛠️",
    },
    {
        title: "Компоненты",
        url: "/components",
        subItems: Object.entries(ComponentsRouter).map(([component, path]) => ({
            title: component,
            url: `/components${path}`,
        })),
        badge: Object.entries(ComponentsRouter).length,
        icon: "💻",
    },
];

export function DocsSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/">
                                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <GalleryVerticalEnd className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">ПИН-КОД UI</span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <form>
                    <SidebarGroup className="py-0">
                        <SidebarGroupContent className="relative">
                            <Label htmlFor="search" className="sr-only">
                                Поиск
                            </Label>
                            <Input id="search" placeholder="Поиск..." className="pl-8" />
                            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                        </SidebarGroupContent>
                    </SidebarGroup>
                </form>
            </SidebarHeader>
            <SidebarContent className="overflow-x-hidden">
                <SidebarNavigation label={"Документация"} items={navItems} />
            </SidebarContent>
            <SidebarFooter>
                <ThemeToggle />
            </SidebarFooter>
        </Sidebar>
    );
}
