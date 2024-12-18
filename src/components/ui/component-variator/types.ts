export type ControlType = "checkbox" | "input" | "select" | "radio";

export interface ControlConfig {
    id: string;
    label: string;
    type: ControlType;
    defaultValue: any;
    options?: { label: string; value: string }[];
    placeholder?: string;
    codeTemplate: (value: any) => string;
}

export interface ComponentConfig {
    name: string;
    description?: string;
    controls: ControlConfig[];
    codeTemplate: (values: Record<string, any>) => string;
}
