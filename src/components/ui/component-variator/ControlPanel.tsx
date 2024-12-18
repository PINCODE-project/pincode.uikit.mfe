import { ScrollArea } from "@/components/ui/scroll-area";
import { Control } from "./Controls";
import type { ComponentConfig } from "./types";

interface ControlPanelProps {
    config: ComponentConfig;
    values: Record<string, any>;
    onChange: (id: string, value: any) => void;
}

export function ControlPanel({ config, values, onChange }: ControlPanelProps) {
    return (
        <ScrollArea className="h-[400px]">
            <div className="space-y-4 pl-1 pr-1">
                {config.controls.map((control) => (
                    <Control
                        key={control.id}
                        config={control}
                        value={values[control.id]}
                        onChange={(value) => onChange(control.id, value)}
                    />
                ))}
            </div>
        </ScrollArea>
    );
}
