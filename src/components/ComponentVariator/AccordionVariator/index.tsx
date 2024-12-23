import { ComponentVariator } from "@/components/ui/component-variator/ComponentVariator";
import type { ComponentConfig } from "@/components/ui/component-variator/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            codeTemplate: (value) => `type="${value}"`,
        },
        {
            id: "collapsible",
            label: "Collapsible",
            type: "checkbox",
            defaultValue: true,
            codeTemplate: (value) => (value ? "collapsible" : ""),
        },
    ],
    codeTemplate: (values) => {
        const props = Object.entries(values)
            .map(([key, value]) => {
                const control = accordionConfig.controls.find((c) => c.id === key);
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
            component={(props) => (
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
