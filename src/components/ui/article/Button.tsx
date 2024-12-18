import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    onClick?: () => void;
}

export function Button({ children, variant = "default", size = "default", className, onClick }: ButtonProps) {
    return (
        <ShadcnButton variant={variant} size={size} className={cn("mt-4", className)} onClick={onClick}>
            {children}
        </ShadcnButton>
    );
}
