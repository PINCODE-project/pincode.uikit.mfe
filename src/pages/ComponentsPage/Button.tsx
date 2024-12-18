import { ArticleContent } from "@/components/ui/article/Article";
import { InlineCode } from "@/components/ui/article/InlineCode";
import { CodeBlock } from "@/components/ui/article/CodeBlock";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { LiveComponent } from "@/components/ui/article/LiveComponent";
import { ButtonVariator } from "@/components/ComponentVariator/ButtonVariator";
import { Book, FileText } from "lucide-react";

const ButtonArticle: ArticleContent[] = [
    { type: "heading", level: 1, content: "Welcome to Our Enhanced Documentation" },
    { type: "paragraph", content: "This is an example of our Markdown-like article renderer with new features." },
    { type: "heading", level: 2, content: "Features" },
    {
        type: "list",
        ordered: false,
        items: [
            "Support for headings",
            "Paragraphs with inline formatting",
            "Lists (ordered and unordered)",
            "Code blocks and inline code",
            "Blockquotes",
            "Images with modal view",
            "Tables",
            "Buttons",
            "Columns",
            "Separators",
            "Code blocks with multiple tabs",
        ],
    },
    { type: "heading", level: 3, content: "Text Formatting" },
    {
        type: "paragraph",
        content: (
            <>
                You can now use <strong>bold</strong>, <em>italic</em>, or even{" "}
                <strong>
                    <em>bold and italic</em>
                </strong>{" "}
                text. We also support <InlineCode>inline code</InlineCode> within paragraphs.
            </>
        ),
    },
    { type: "heading", level: 3, content: "Code Example" },
    {
        type: "code",
        language: "javascript",
        content: 'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");',
    },
    {
        type: "blockquote",
        content: (
            <>
                This is a blockquote. It can be used for important notes or quotes. It also supports{" "}
                <strong>inline formatting</strong>.
            </>
        ),
    },
    { type: "heading", level: 3, content: "Image Example" },
    { type: "paragraph", content: "Click on the image to view it in full size:" },
    {
        type: "image",
        src: "https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled",
        alt: "Example image",
    },
    { type: "heading", level: 3, content: "Table Example" },
    {
        type: "table",
        headers: ["Name", "Type", "Description"],
        rows: [
            ["Heading", "Component", "Renders headings from h1 to h6"],
            ["Paragraph", "Component", "Renders paragraphs with inline formatting"],
            ["List", "Component", "Renders ordered and unordered lists"],
            ["CodeBlock", "Component", "Renders code blocks with syntax highlighting"],
            ["Image", "Component", "Renders images with modal functionality"],
        ],
    },
    { type: "heading", level: 3, content: "Button Example" },
    { type: "button", content: "Click me!", onClick: () => alert("Button clicked!") },
    { type: "heading", level: 3, content: "Columns Example" },
    {
        type: "columns",
        content: [
            [{ type: "heading", level: 3, content: "1 column" }],
            [{ type: "heading", level: 3, content: "2 column" }],
            [{ type: "heading", level: 3, content: "2 column" }],
            // [{ type: "heading", level: 3, content: "2 column" }],
            // [
            //     {
            //         type: "image",
            //         src: "https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled",
            //         alt: "Example image",
            //     },
            // ],
        ],
    },
    { type: "heading", level: 3, content: "Separator Example" },
    { type: "separator" },
    { type: "heading", level: 3, content: "Code with Tabs Example" },
    {
        type: "tabs",
        tabs: [
            {
                label: "JavaScript",
                children: (
                    <CodeBlock language="javascript" className="mt-0">
                        {'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");'}
                    </CodeBlock>
                ),
            },
            {
                label: "Ruby",
                children: (
                    <CodeBlock language="ruby" className="mt-0">
                        {'def greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("World")'}
                    </CodeBlock>
                ),
            },
        ],
    },
    { type: "heading", level: 2, content: "Conclusion" },
    {
        type: "paragraph",
        content:
            "This example demonstrates how to use our enhanced Article component to render Markdown-like content with advanced features.",
    },
    {
        type: "tabs",
        tabs: [
            {
                label: "Preview",
                children: (
                    <LiveComponent
                        className="mt-0"
                        component={
                            <Carousel className="w-full max-w-xs mt-0">
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
                        }
                    />
                ),
            },
            {
                label: "Code",
                children: (
                    <CodeBlock language="javascript" className="mt-0">
                        {'<Carousel className="w-full max-w-xs">\n' +
                            "                <CarouselContent>\n" +
                            "                    {Array.from({ length: 5 }).map((_, index) => (\n" +
                            "                        <CarouselItem key={index}>\n" +
                            '                            <div className="p-1">\n' +
                            "                                <Card>\n" +
                            '                                    <CardContent className="flex aspect-square items-center justify-center p-6">\n' +
                            '                                        <span className="text-4xl font-semibold">{index + 1}</span>\n' +
                            "                                    </CardContent>\n" +
                            "                                </Card>\n" +
                            "                            </div>\n" +
                            "                        </CarouselItem>\n" +
                            "                    ))}\n" +
                            "                </CarouselContent>\n" +
                            "                <CarouselPrevious />\n" +
                            "                <CarouselNext />\n" +
                            "            </Carousel>"}
                    </CodeBlock>
                ),
            },
        ],
    },
    {
        type: "custom",
        component: <ButtonVariator />,
    },
    {
        type: "cardGroup",
        items: [
            { icon: Book, title: "Documentation", description: "Read our docs", href: "/docs" },
            { icon: FileText, title: "API Reference", description: "Learn about our API", href: "/api" },
            { icon: FileText, title: "API Reference", description: "Learn about our API", href: "/api" },
            { icon: FileText, title: "API Reference", description: "Learn about our API", href: "/api" },
        ],
    },
    {
        type: "fieldGroup",
        title: "Button",
        description: "опи",
        items: [
            {
                name: "variant",
                type: "string",
                description: "The button variant",
                required: true,
            },
            {
                name: "size",
                type: "string",
                description: "The size of the button",
                defaultValue: "'md'",
                required: false,
            },
            {
                name: "disabled",
                type: "boolean",
                description: "Whether the button is disabled",
                defaultValue: "false",
                required: false,
            },
        ],
    },
    {
        type: "presentation",
        slides: [
            {
                image: "https://avatars.mds.yandex.net/i?id=b17b2d471b6931aa2089e46d0334f03c_l-5283235-images-thumbs&n=13",
                alt: "Nature 1",
                transitionType: "zoom",
            },
            {
                image: "https://pet-mir.ru/wp-content/uploads/2020/08/5f2ea195c0cf74742c396f91-1.jpg",
                alt: "Nature 2",
                transitionType: "fade",
            },
            {
                image: "https://www.domashniy-comfort.ru/images/stories/picture/00000korgi/korg_001.jpg",
                alt: "Nature 3",
                transitionType: "fade",
            },
        ],
    },
];

export default ButtonArticle;
