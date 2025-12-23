"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power3.out",
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 2,
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        const interactiveElements = document.querySelectorAll(
            "a, button, .interactive"
        );
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[10001] mix-blend-difference hidden md:block"
            style={{ transform: "translate(-50%, -50%)" }}
        />
    );
}
