import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ControlConfig } from "./types";

interface ControlProps {
    config: ControlConfig;
    value: any;
    onChange: (value: any) => void;
}

export function Control({ config, value, onChange }: ControlProps) {
    switch (config.type) {
        case "checkbox":
            return (
                <div className="flex items-center space-x-2">
                    <Checkbox id={config.id} checked={value.value} onCheckedChange={onChange} />
                    <Label htmlFor={config.id}>{config.label}</Label>
                </div>
            );

        case "input":
            return (
                <div className="space-y-2">
                    <Label htmlFor={config.id}>{config.label}</Label>
                    <Input
                        id={config.id}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={config.placeholder}
                    />
                </div>
            );

        case "select":
            return (
                <div className="space-y-2">
                    <Label htmlFor={config.id}>{config.label}</Label>
                    <Select value={value} onValueChange={onChange}>
                        <SelectTrigger id={config.id}>
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            {config.options?.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            );

        case "radio":
            return (
                <div className="space-y-2">
                    <Label>{config.label}</Label>
                    <RadioGroup value={value} onValueChange={onChange}>
                        {config.options?.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`${config.id}-${option}`} />
                                <Label htmlFor={`${config.id}-${option}`}>{option.label}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            );

        default:
            return null;
    }
}
