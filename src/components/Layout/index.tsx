import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <SidebarProvider>
            <div>
                <DocsSidebar />
                <SidebarTrigger className="ml-3 mt-3 fixed top-0 left-1" />
            </div>
            <main className="flex-1 p-8 pt-16 max-w-3xl mx-auto">
                <Outlet />
            </main>
        </SidebarProvider>
    );
}
