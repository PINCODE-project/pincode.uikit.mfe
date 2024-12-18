import { Button } from "@/components/ui/button";
import { ComponentVariator } from "@/components/ui/component-variator/ComponentVariator";
import type { ComponentConfig } from "@/components/ui/component-variator/types";

const buttonConfig: ComponentConfig = {
    name: "Button",
    description: "A button component with customizable properties",
    controls: [
        {
            id: "children",
            label: "Button Text",
            type: "input",
            defaultValue: "Click me",
            placeholder: "Enter button text",
            codeTemplate: (value) => `"${value}"`,
        },
        {
            id: "variant",
            label: "Variant",
            type: "select",
            defaultValue: "default",
            options: [
                { label: "Default", value: "default" },
                { label: "Destructive", value: "destructive" },
                { label: "Outline", value: "outline" },
                { label: "Secondary", value: "secondary" },
                { label: "Ghost", value: "ghost" },
                { label: "Link", value: "link" },
            ],
            codeTemplate: (value) => `variant="${value}"`,
        },
        {
            id: "size",
            label: "Size",
            type: "radio",
            defaultValue: "default",
            options: [
                { label: "Default", value: "default" },
                { label: "Small", value: "sm" },
                { label: "Large", value: "lg" },
            ],
            codeTemplate: (value) => `size="${value}"`,
        },
        {
            id: "disabled",
            label: "Disabled",
            type: "checkbox",
            defaultValue: false,
            codeTemplate: (value) => (value ? "disabled" : ""),
        },
    ],
    codeTemplate: (values) => {
        const props = Object.entries(values)
            .map(([key, value]) => {
                const control = buttonConfig.controls.find((c) => c.id === key);
                return control && control.type !== "input" ? control.codeTemplate(value) : "";
            })
            .filter(Boolean)
            .join(" ");

        return `<Button ${props}>
  ${values.children}
</Button>`;
    },
};

export function ButtonVariator() {
    return <ComponentVariator config={buttonConfig} component={(props) => <Button {...props} />} />;
}
