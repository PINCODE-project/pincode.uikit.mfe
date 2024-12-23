import * as React from "react";
import { GalleryVerticalEnd, Search, ChevronDown } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ComponentsRouter } from "@/router/routes/components";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
    {
        title: "Introduction",
        url: "/",
    },
    {
        title: "Начало работы",
        url: "/getting-started",
        subItems: [
            { title: "Installation", url: "/getting-started#installation" },
            { title: "Configuration", url: "/getting-started#configuration" },
        ],
    },
    {
        title: "Компоненты",
        url: "/components",
        subItems: Object.entries(ComponentsRouter).map(([component, path]) => ({
            title: component,
            url: `/components${path}`,
        })),
    },
    {
        title: "API Reference",
        url: "/api-reference",
    },
];

export function DocsSidebar() {
    const [activeItem, setActiveItem] = React.useState("/");

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
                                    <span className="font-semibold">Пин-код UI</span>
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
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    {item.subItems ? (
                                        <Collapsible>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton isActive={activeItem === item.url}>
                                                    {item.title}
                                                    <ChevronDown className="ml-auto h-4 w-4" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenu className="mt-2 ml-4">
                                                    {item.subItems.map((subItem) => (
                                                        <SidebarMenuItem key={subItem.url}>
                                                            <SidebarMenuButton
                                                                asChild
                                                                isActive={activeItem === subItem.url}
                                                                onClick={() => setActiveItem(subItem.url)}
                                                            >
                                                                <Link to={subItem.url}>{subItem.title}</Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    ))}
                                                </SidebarMenu>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <SidebarMenuButton
                                            asChild
                                            isActive={activeItem === item.url}
                                            onClick={() => setActiveItem(item.url)}
                                        >
                                            <Link to={item.url}>{item.title}</Link>
                                        </SidebarMenuButton>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <ThemeToggle />
            </SidebarFooter>
        </Sidebar>
    );
}
