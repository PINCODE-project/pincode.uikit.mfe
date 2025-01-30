import { ArticleContent } from "@pin-code/uikit.lib";
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
    { type: "heading", level: 2, content: "Использование компонента" },
    {
        type: "code",
        content:
            "import {\n" +
            "  Accordion,\n" +
            "  AccordionContent,\n" +
            "  AccordionItem,\n" +
            "  AccordionTrigger,\n" +
            '} from "ui/Accordion"',
    },
    {
        type: "code",
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
    { type: "heading", level: 2, content: "Props" },
    {
        type: "fieldGroup",
        title: "Root",
        description: "Содержит все части аккордеона",
        items: [
            {
                name: "type",
                type: "\"single\" | \"multiple\"",
                description: "Определяет, один или несколько элементов может быть открыто одновременно.",

                required: true,
            },
            {
                name: "asChild",
                type: "boolean",
                description: "Change the default rendered element for the one passed as a child, merging their props and behavior.",
                defaultValue: "false",
                required: false,
            },
            {
                name: "value",
                type: "string | string[]",
                defaultValue: "[]",
                description: "The controlled value of the item to expand. Must be used in conjunction with onValueChange",
                required: false,
            },
            {
                name: "defaultValue",
                type: "string",
                description: "The value of the item to expand when initially rendered and type is \"single\". Use when you do not need to control the state of the items.",
                required: false,
            },
        ],
    },

];

export default AccordionArticle;
