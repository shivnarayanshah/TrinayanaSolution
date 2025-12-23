"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // Sync ScrollTrigger with Lenis
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Ensure ScrollTrigger is aware of initial page height
        const refresh = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", refresh);

        // Initial refresh after a short delay
        const timer = setTimeout(refresh, 1000);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            window.removeEventListener("resize", refresh);
            clearTimeout(timer);
        };
    }, []);

    return <>{children}</>;
}
