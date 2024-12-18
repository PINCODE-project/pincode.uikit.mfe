import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function Image({ src, alt, className }: ImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="inline-block">
                    <img src={src} alt={alt} className={cn("cursor-pointer rounded-md", className)} />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 border-0">
                <img src={src} alt={alt} className="w-full h-auto sm:rounded-md" />
            </DialogContent>
        </Dialog>
    );
}
