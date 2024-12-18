import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { ComponentConfig } from "./types";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
    config: ComponentConfig;
    values: Record<string, any>;
    className: string;
}

export function CodePreview({ config, values, className }: CodePreviewProps) {
    const { toast } = useToast();
    const code = config.codeTemplate(values);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        toast({
            title: "Copied to clipboard",
            description: "The code has been copied to your clipboard.",
        });
    };

    return (
        <div className={cn("relative", className)}>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{code}</code>
            </pre>
            <Button variant="ghost" size="icon" onClick={copyCode} className="absolute top-6 right-1">
                <Copy className="h-4 w-4" />
            </Button>
        </div>
    );
}
