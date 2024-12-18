import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface Slide {
    image: string;
    alt: string;
    transitionType: "dissolve" | "slide" | "fade" | "zoom";
}

export interface PresentationProps {
    slides: Slide[];
    className?: string;
}

export function Presentation({ slides, className }: PresentationProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const getTransitionClass = (type: Slide["transitionType"]) => {
        switch (type) {
            case "dissolve":
                return "transition-opacity duration-500 ease-in-out";
            case "slide":
                return "transition-transform duration-500 ease-in-out";
            case "fade":
                return "transition-all duration-500 ease-in-out";
            case "zoom":
                return "transition-all duration-500 ease-in-out";
            default:
                return "";
        }
    };

    console.log(currentSlide);

    return (
        <div className={cn("relative w-full aspect-video mt-6 overflow-clip rounded-xl", className)}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={cn("absolute inset-0", getTransitionClass(slide.transitionType), {
                        "opacity-100 translate-x-0 scale-100": index === currentSlide,
                        "opacity-0 -translate-x-full scale-95": index < currentSlide,
                        "opacity-0 translate-x-full scale-95": index > currentSlide,
                    })}
                >
                    <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
            ))}
            {currentSlide > 0 && (
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    onClick={goToPrevSlide}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
            )}
            {currentSlide < slides.length - 1 && (
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={goToNextSlide}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
}
