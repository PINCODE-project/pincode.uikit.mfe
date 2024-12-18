import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Field {
    name: string;
    type: string;
    defaultValue?: string;
    description?: string;
    required?: boolean;
}

export interface FieldGroupProps {
    title: string;
    description?: string;
    fields: Field[];
    className?: string;
}

export function FieldGroup({ title, description, fields, className }: FieldGroupProps) {
    return (
        <Card className={cn("w-full mt-6", className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {fields.map((field, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">{field.name}</h3>
                                <div className="flex gap-2">
                                    <Badge variant="secondary">{field.type}</Badge>
                                    {field.required && <Badge variant="destructive">Required</Badge>}
                                </div>
                            </div>
                            {field.description && (
                                <p className="text-sm text-muted-foreground mt-1">{field.description}</p>
                            )}
                            {field.defaultValue !== undefined && (
                                <p className="text-sm mt-1">
                                    <span className="font-medium">Default:</span> {field.defaultValue}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
