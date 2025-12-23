"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const clients = [
    "BuildNepal Corp", "TechValley", "Lumbini Infra", "Apex Systems",
    "GreenDesign", "Kathmandu Tech", "Urban Developers", "SmartGrid",
    "BuildNepal Corp", "TechValley", "Lumbini Infra", "Apex Systems"
];

export default function ClientLogos() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(scrollRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "none"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-12 bg-background border-y border-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted">Strategic Partners & Clients</span>
            </div>
            <div className="flex whitespace-nowrap" ref={scrollRef}>
                {[...clients, ...clients].map((client, i) => (
                    <div key={i} className="inline-block px-12 text-2xl font-black text-muted/30 uppercase tracking-tighter hover:text-accent transition-colors duration-500 cursor-default">
                        {client}
                    </div>
                ))}
            </div>
        </section>
    );
}
