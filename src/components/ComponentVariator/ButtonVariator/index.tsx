import { Button } from "@pin-code/uikit.lib";
import { ComponentVariator } from "@pin-code/uikit.lib";
import type { ComponentConfig } from "@pin-code/uikit.lib";

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
            codeTemplate: (value: any) => `"${value}"`,
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
            codeTemplate: (value: any) => `variant="${value}"`,
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
            codeTemplate: (value: any) => `size="${value}"`,
        },
        {
            id: "disabled",
            label: "Disabled",
            type: "checkbox",
            defaultValue: false,
            codeTemplate: (value: any) => (value ? "disabled" : ""),
        },
    ],
    codeTemplate: (values: Record<string, any>) => {
        const props = Object.entries(values)
            .map(([key, value]) => {
                const control = buttonConfig.controls.find((c: any) => c.id === key);
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
    return <ComponentVariator config={buttonConfig} component={(props: any) => <Button {...props} />} />;
}
