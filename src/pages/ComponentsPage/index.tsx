import { Article, ArticleContent } from "@/components/ui/article/Article";
import { FC } from "react";
import { TableOfContentItem, TableOfContents } from "@/components/ui/article/TableOfContents";

type Props = {
    content: ArticleContent[];
};

const ComponentsPage: FC<Props> = ({ content }) => {
    const headings: TableOfContentItem[] = content
        .map((item, index) =>
            item.type === "heading"
                ? {
                      id: `heading${index}`,
                      title: item.content,
                      level: item.level,
                  }
                : undefined,
        )
        .filter(Boolean) as TableOfContentItem[];

    return (
        <>
            <Article content={content} />
            <TableOfContents headings={headings} className="fixed top-6 right-3 hidden 2xl:block" />
        </>
    );
};

export default ComponentsPage;
