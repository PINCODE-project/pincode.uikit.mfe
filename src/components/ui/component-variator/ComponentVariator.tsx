import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ControlPanel } from "./ControlPanel";
import { CodePreview } from "./CodePreview";
import type { ComponentConfig } from "./types";
import { LiveComponent } from "@/components/ui/article/LiveComponent";

interface ComponentVariatorProps {
    config: ComponentConfig;
    component: React.ComponentType<any>;
}

export function ComponentVariator({ config, component: Component }: ComponentVariatorProps) {
    const [values, setValues] = React.useState<Record<string, any>>(() => {
        return config.controls.reduce(
            (acc, control) => {
                acc[control.id] = control.defaultValue;
                return acc;
            },
            {} as Record<string, any>,
        );
    });

    const handleChange = (id: string, value: any) => {
        setValues((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="space-y-6 mt-6">
            <Card>
                <CardContent className="pt-6">
                    <div className="grid gap-6" style={{ gridTemplateColumns: `2fr 1fr` }}>
                        <LiveComponent component={<Component {...values} />} className="m-0" />
                        <ControlPanel config={config} values={values} onChange={handleChange} />
                    </div>
                    <CodePreview config={config} values={values} className="pt-4" />
                </CardContent>
            </Card>
        </div>
    );
}
