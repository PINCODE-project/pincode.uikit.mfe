import { Tabs as ShadcnTabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { cn } from "@/lib/utils";

interface TabsCodeProps {
    tabs: {
        label: string;
        children: React.ReactNode;
    }[];
    className?: string;
}

export function Tabs({ tabs, className }: TabsCodeProps) {
    return (
        <ShadcnTabs defaultValue={tabs[0]!.label} className={cn("w-full mt-4", className)}>
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.label} value={tab.label}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.label} value={tab.label}>
                    {tab.children}
                </TabsContent>
            ))}
        </ShadcnTabs>
    );
}
