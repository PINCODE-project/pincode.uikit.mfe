import { Separator as ShadcnSeparator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SeparatorProps {
    className?: string;
}

export function Separator({ className }: SeparatorProps) {
    return <ShadcnSeparator className={cn("my-4", className)} />;
}
