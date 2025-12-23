"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const iconRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(iconRef.current,
            { scale: 0.5, rotate: -90, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
    }, [theme]);

    return (
        <button
            onClick={toggleTheme}
            className="p-3 bg-card border border-border rounded-2xl text-foreground hover:border-accent/40 transition-colors shadow-lg active:scale-90"
            aria-label="Toggle Theme"
        >
            <div ref={iconRef}>
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </div>
        </button>
    );
}
