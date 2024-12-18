import React, { JSX } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Heading({ level, children, className, id }: HeadingProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const styles = {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        h5: "scroll-m-20 text-lg font-semibold tracking-tight",
        h6: "scroll-m-20 text-base font-semibold tracking-tight",
    };

    return (
        <Tag className={cn(styles[`h${level}`], "[&:not(:first-child)]:mt-6", className)} id={id}>
            {children}
        </Tag>
    );
}
