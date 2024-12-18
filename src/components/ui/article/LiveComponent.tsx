import React from "react";
import { cn } from "@/lib/utils";

interface LiveComponentProps {
    component: React.ReactNode;
    className?: string;
}

export function LiveComponent({ component, className }: LiveComponentProps) {
    return (
        <div
            className={cn(
                "flex justify-center items-center my-6 p-6 bg-slate-100 dark:bg-zinc-700 rounded-lg shadow-inner min-h-[350px]",
                className,
            )}
        >
            {component}
        </div>
    );
}
