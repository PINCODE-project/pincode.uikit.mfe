import { ArticleContent } from "@/components/ui/article/Article";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionVariator } from "@/components/ComponentVariator/AccordionVariator";

const AccordionArticle: ArticleContent[] = [
    { type: "heading", level: 1, content: "Accordion" },
    {
        type: "paragraph",
        content:
            "Вертикально расположенный набор интерактивных заголовков, каждый из которых раскрывает определенный раздел контента.",
    },
    {
        type: "custom",
        component: <AccordionVariator />,
    },
    {
        type: "custom",
        component: (
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
            </Accordion>
        ),
    },
    {
        type: "code",
        language: "javascript",
        content:
            '<Accordion type="single" collapsible>\n' +
            '  <AccordionItem value="item-1">\n' +
            "    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n" +
            "    <AccordionContent>\n" +
            "      Yes. It adheres to the WAI-ARIA design pattern.\n" +
            "    </AccordionContent>\n" +
            "  </AccordionItem>\n" +
            "</Accordion>",
    },
];

export default AccordionArticle;
