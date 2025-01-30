import { ComponentVariator } from "@pin-code/uikit.lib";
import type { ComponentConfig } from "@pin-code/uikit.lib";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@pin-code/uikit.lib";

const accordionConfig: ComponentConfig = {
    name: "Accordion",
    description: "A button component with customizable properties",
    controls: [
        {
            id: "type",
            label: "Type",
            type: "select",
            defaultValue: "single",
            options: [
                { label: "Single", value: "single" },
                { label: "Multiple", value: "multiple" },
            ],
            codeTemplate: (value: string) => `type="${value}"`,
        },
        {
            id: "collapsible",
            label: "Collapsible",
            type: "checkbox",
            defaultValue: true,
            codeTemplate: (value: Record<string, any>) => (value ? "collapsible" : ""),
        },
    ],
    codeTemplate: (values: Record<string, any>) => {
        const props = Object.entries(values)
            .map(([key, value]) => {
                const control = accordionConfig.controls.find((c: any) => c.id === key);
                return control && control.type !== "input" ? control.codeTemplate(value) : "";
            })
            .filter(Boolean)
            .join(" ");

        return `<Accordion ${props}>
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
</Accordion>`;
    },
};

export function AccordionVariator() {
    return (
        <ComponentVariator
            config={accordionConfig}
            component={(props: any) => (
                <div className="w-full">
                    <Accordion {...props}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            )}
        />
    );
}
