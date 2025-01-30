import { ArticleContent, CodeBlock } from "@pin-code/uikit.lib";

const InstallationPage: ArticleContent[] = [
    { type: "heading", level: 2, content: "Установка библиотеки" },
    { type: "paragraph", content: "Для использования общего пакета компонентов, нужно сделать несколько шагов" },
    { type: "list", items: ["Добавить пакет как зависимость к своему проекту"], ordered: false },
    {
        type: "tabs",
        tabs: [
            {
                label: "npm",
                children: (
                    <CodeBlock language="bash" className="mt-0">
                        npm install @pin-code/uikit.lib
                    </CodeBlock>
                ),
            },
            {
                label: "yarn",
                children: (
                    <CodeBlock language="ruby" className="mt-0">
                        yarn add @pin-code/uikit.lib
                    </CodeBlock>
                ),
            },
        ],
    },
    { type: "list", items: ["Добавить импорт файла стилей"], ordered: false },
    {
        type: "code",
        content: 'import "@pin-code/uikit.lib/dist/static/css/main.css";',
    },
    { type: "list", items: ["Добавить провайдер react-router-dom для библиотеки"], ordered: false },
    {
        type: "code",
        content:
            "export default function MyApp() {\n" +
            "    return (\n" +
            '        <div className="App">\n' +
            "            <BrowserRouter>\n" +
            "                <RouterProvider Router={BrowserRouter} Link={Link} useLocation={useLocation}>\n" +
            "                    <AppRouter element={<Layout />} />\n" +
            "                    <Toaster />\n" +
            "                </RouterProvider>\n" +
            "            </BrowserRouter>\n" +
            "        </div>\n" +
            "    );\n" +
            "}",
    },
    { type: "heading", level: 2, content: "Использование компонентов" },
    { type: "paragraph", content: "Теперь можно импортировать компоненты, вот пример как импортировать кнопку" },
    {
        type: "code",
        content: "import { Button } from '@pin-code/uikit.lib';\n\n<Button>Текст кнопки</Button>",
    },
];

export default InstallationPage;
