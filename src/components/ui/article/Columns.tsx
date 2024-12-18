import { cn } from "@/lib/utils";
import { Article, ArticleContent } from "@/components/ui/article/Article";

interface ColumnsProps {
    content: ArticleContent[][];
    className?: string;
}

export function Columns({ content, className }: ColumnsProps) {
    if (!content) return null;

    const gridCols = content.length > 2 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";

    return (
        <div className={cn(`grid grid-cols-1 ${gridCols} gap-4 mt-4`, className)}>
            {content.map((child, index) => (
                <div key={index} className="break-inside-avoid grow">
                    <Article content={child} />
                </div>
            ))}
        </div>
    );
}
