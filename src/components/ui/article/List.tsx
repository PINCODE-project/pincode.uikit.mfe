import React from "react";
import { cn } from "@/lib/utils";

interface ListProps {
    ordered?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function List({ ordered = false, children, className }: ListProps) {
    const Tag = ordered ? "ol" : "ul";
    return (
        <Tag className={cn("my-6 ml-6 list-disc [&>li]:mt-2", ordered && "list-decimal", className)}>{children}</Tag>
    );
}

interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

export function ListItem({ children, className }: ListItemProps) {
    return <li className={className}>{children}</li>;
}
