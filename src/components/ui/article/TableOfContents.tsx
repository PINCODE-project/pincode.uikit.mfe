import { cn } from "@/lib/utils";

export interface TableOfContentItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsProps {
    headings: TableOfContentItem[];
    className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
    return (
        <nav className={cn("w-64 p-1", className)}>
            <h2 className="text-lg font-semibold mb-4">Навигация</h2>
            <ul className="space-y-2">
                {headings.map((heading) => (
                    <li key={heading.id} style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}>
                        <a
                            href={`#${heading.id}`}
                            className="text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {heading.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
