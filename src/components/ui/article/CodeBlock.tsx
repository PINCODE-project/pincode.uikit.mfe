import { cn } from "@/lib/utils";

interface CodeBlockProps {
    children: string;
    language?: string;
    className?: string;
}

export function CodeBlock({ children, language, className }: CodeBlockProps) {
    return (
        <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-4", className)}>
            <code className={language && `language-${language}`}>{children}</code>
        </pre>
    );
}
