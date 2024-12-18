import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

export interface CardGroupItemProps {
    icon: LucideIcon;
    title: string;
    description?: string;
    href: string;
}

export interface CardGroupProps {
    items: CardGroupItemProps[];
    className?: string;
}

export function CardGroup({ items, className }: CardGroupProps) {
    return (
        <div
            className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6", className)}
            style={{ gridTemplateColumns: items.length !== 3 ? `repeat(2, 1fr)` : `repeat(3, 1fr)` }}
        >
            {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Card
                        key={index}
                        className="transition-colors hover:bg-muted/50 cursor-pointer"
                        onClick={() => (window.location.href = item.href)}
                    >
                        <CardHeader>
                            <div className="flex justify-center gap-4 flex-col min-h-[150px]">
                                <div className="p-2 bg-primary/10 rounded-lg w-fit">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="space-y-10">
                                    <CardTitle>{item.title}</CardTitle>
                                    {item.description && <CardDescription>{item.description}</CardDescription>}
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                );
            })}
        </div>
    );
}
