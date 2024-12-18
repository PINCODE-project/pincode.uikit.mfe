import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { List, ListItem } from "./List";
import { CodeBlock } from "./CodeBlock";
import { Blockquote } from "./Blockquote";
import { Image } from "./Image";
import { Table } from "./Table";
import { Button } from "./Button";
import { Columns } from "./Columns";
import { Separator } from "./Separator";
import { Tabs } from "./Tabs";
import { LiveComponent } from "@/components/ui/article/LiveComponent";
import { CardGroup, CardGroupItemProps } from "@/components/ui/article/CardGroup";
import { Field, FieldGroup } from "@/components/ui/article/FieldGroup";
import { Presentation, Slide } from "@/components/ui/presentation";

interface ArticleProps {
    content: ArticleContent[];
}

export type ArticleContent = { hide?: boolean; id?: string } & (
    | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; content: string }
    | { type: "paragraph"; content: React.ReactNode }
    | { type: "list"; ordered: boolean; items: React.ReactNode[] }
    | { type: "code"; language?: string; content: string }
    | { type: "blockquote"; content: React.ReactNode }
    | { type: "image"; src: string; alt: string }
    | { type: "table"; headers: string[]; rows: React.ReactNode[][] }
    | {
          type: "button";
          variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
          size?: "default" | "sm" | "lg" | "icon";
          content: string;
          onClick?: () => void;
      }
    | { type: "columns"; content: ArticleContent[][] }
    | { type: "separator" }
    | { type: "tabs"; tabs: { label: string; children: React.ReactNode }[] }
    | { type: "liveComponent"; component: React.ReactNode }
    | { type: "cardGroup"; items: CardGroupItemProps[] }
    | { type: "fieldGroup"; title: string; description: string; items: Field[] }
    | { type: "presentation"; slides: Slide[] }
    | { type: "custom"; component: React.ReactNode }
);

export function Article({ content }: ArticleProps) {
    return (
        <article className="max-w-3xl mx-auto">
            {content.map((item, index) => {
                if (!item.hide)
                    switch (item.type) {
                        case "heading":
                            return (
                                <Heading key={index} level={item.level} id={item.id || `${item.type}${index}`}>
                                    {item.content}
                                </Heading>
                            );
                        case "paragraph":
                            return <Paragraph key={index}>{item.content}</Paragraph>;
                        case "list":
                            return (
                                <List key={index} ordered={item.ordered}>
                                    {item.items.map((listItem, listItemIndex) => (
                                        <ListItem key={listItemIndex}>{listItem}</ListItem>
                                    ))}
                                </List>
                            );
                        case "code":
                            return (
                                <CodeBlock key={index} language={item.language}>
                                    {item.content}
                                </CodeBlock>
                            );
                        case "blockquote":
                            return <Blockquote key={index}>{item.content}</Blockquote>;
                        case "image":
                            return <Image key={index} src={item.src} alt={item.alt} />;
                        case "table":
                            return <Table key={index} headers={item.headers} rows={item.rows} />;
                        case "button":
                            return (
                                <Button key={index} variant={item.variant} size={item.size} onClick={item.onClick}>
                                    {item.content}
                                </Button>
                            );
                        case "columns":
                            return <Columns key={index} content={item.content} />;
                        case "separator":
                            return <Separator key={index} />;
                        case "tabs":
                            return <Tabs key={index} tabs={item.tabs} />;
                        case "liveComponent":
                            return <LiveComponent key={index} component={item.component} />;
                        case "cardGroup":
                            return <CardGroup key={index} items={item.items} />;
                        case "fieldGroup":
                            return (
                                <FieldGroup
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    fields={item.items}
                                />
                            );
                        case "presentation":
                            return <Presentation key={index} slides={item.slides} />;
                        case "custom":
                            return item.component;
                        default:
                            return null;
                    }
            })}
        </article>
    );
}
