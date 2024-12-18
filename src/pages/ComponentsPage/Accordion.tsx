import { ArticleContent } from "@/components/ui/article/Article";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccordionArticle: ArticleContent[] = [
    { type: "heading", level: 1, content: "Welcome to Our Documentation" },
    { type: "paragraph", content: "This is an example of our Markdown-like article renderer." },
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
