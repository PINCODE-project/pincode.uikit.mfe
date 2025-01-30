import { Article, ArticleContent } from "@pin-code/uikit.lib";
import { useState } from "react";
import { InlineCode } from "@pin-code/uikit.lib";
// import { BlockEditor } from "@pin-code/uikit.lib";
// import { useCollaboration } from "@pin-code/uikit.lib";

const LearnPage = () => {
    const [step, setStep] = useState<number>(0);

    // const providerState = useCollaboration({
    //     docId: "1",
    //     enabled: true,
    // })

    const content: ArticleContent[] = [
        { type: "heading", level: 1, content: "Welcome to Our Enhanced Documentation" },
        {
            type: "paragraph",
            content: "This is an example of our Markdown-like article renderer with new features.",
            hide: step < 0,
        },
        { type: "heading", level: 2, content: "Features", hide: step < 1 },
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
            hide: step < 2,
        },
        { type: "heading", level: 3, content: "Text Formatting", hide: step < 3 },
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
            hide: step < 4,
        },
        { type: "heading", level: 3, content: "Code Example", hide: step < 5 },
        {
            type: "code",
            language: "javascript",
            content: 'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");',
            hide: step < 6,
        },
        {
            type: "blockquote",
            content: (
                <>
                    This is a blockquote. It can be used for important notes or quotes. It also supports{" "}
                    <strong>inline formatting</strong>.
                </>
            ),
            hide: step < 7,
        },
        { type: "heading", level: 3, content: "Image Example", hide: step < 8 },
        { type: "paragraph", content: "Click on the image to view it in full size:", hide: step < 9 },
        {
            type: "image",
            src: "https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled",
            alt: "Example image",
            hide: step < 10,
        },
        { type: "button", content: "Click me!", onClick: () => setStep((prev) => prev + 1) },
    ];

    return (
        <>
            <Article content={content} />
            {/*<BlockEditor ydoc={providerState.yDoc} provider={providerState.provider} />*/}
        </>
    );
};

export default LearnPage;
