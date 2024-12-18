import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Проверяем начальное состояние на основе класса body
        return document.body.classList.contains("dark");
    });

    const toggleTheme = () => {
        if (isDarkMode) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="flex gap-2 items-center justify-center">
            <Sun className="h-[1.5rem] w-[1.3rem]" />
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            <Moon className="h-5 w-5" />
        </div>
    );
};

export default ThemeToggle;
