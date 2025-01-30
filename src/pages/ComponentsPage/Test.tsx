import {
    ArticleContent,
    Button,
    Card,
    CardContent,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@pin-code/uikit.lib";

const AccordionArticle: ArticleContent[] = [
    { type: "heading", level: 1, content: "Accordion" },
    { type: "paragraph", content: "Вертикально расположенный набор интерактивных заголовков, каждый из которых раскрывает определенный раздел контента." },
    { type: "heading", level: 2, content: "Features" },
    {
        type: "list",
        ordered: false,
        items: ["Support for headings", "Paragraphs", "Lists (ordered and unordered)", "Code blocks", "Blockquotes"],
    },
    { type: "heading", level: 3, content: "Code Example" },
    {
        type: "code",
        language: "javascript",
        content: 'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");',
    },
    { type: "paragraph", content: "You can also use inline code like this: `const x = 42;`" },
    { type: "blockquote", content: "This is a blockquote. It can be used for important notes or quotes." },
    { type: "heading", level: 2, content: "Conclusion" },
    {
        type: "paragraph",
        content: "This example demonstrates how to use our Article component to render Markdown-like content.",
    },
    {
        type: "custom",
        component: (
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        ),
    },
    {
        type: "liveComponent",
        component: (
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        ),
    },
    {
        type: "liveComponent",
        component: <Button>wd</Button>,
    },
];

export default AccordionArticle;
