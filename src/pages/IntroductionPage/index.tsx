import { ArticleContent } from "@pin-code/uikit.lib";
import { Book, FileText } from "lucide-react";

const IntroductionPage: ArticleContent[] = [
    // { type: "heading", level: , content: "Добро пожаловать в ПИН-КОД UI-кит" },
    {
        type: "cardGroup",
        items: [
            { icon: Book, title: "Установка", description: "Read our docs", href: "/installation" },
            { icon: Book, title: "Компоненты", description: "Read our docs", href: "/docs" },
            { icon: FileText, title: "Хуки", description: "Learn about our API", href: "/api" },
            { icon: FileText, title: "API Reference", description: "Learn about our API", href: "/api" },
        ],
    },
]

export default IntroductionPage;

