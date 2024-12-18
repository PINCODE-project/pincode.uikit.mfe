import { Tabs as ShadcnTabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

interface TabsCodeProps {
    tabs: {
        label: string;
        children: React.ReactNode;
    }[];
}

export function Tabs({ tabs }: TabsCodeProps) {
    return (
        <ShadcnTabs defaultValue={tabs[0]!.label} className="w-full mt-4">
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
