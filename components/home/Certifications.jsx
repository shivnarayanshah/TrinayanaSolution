"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const tools = [
    { name: "AutoCAD", category: "Engineering" },
    { name: "Revit", category: "BIM" },
    { name: "ETABS", category: "Structural" },
    { name: "Primavera", category: "Planning" },
    { name: "SAP2000", category: "Analysis" },
    { name: "Next.js", category: "IT Service" },
    { name: "PostgreSQL", category: "Data Systems" },
    { name: "AWS Cloud", category: "Infrastructure" },
];

export default function Certifications() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".tool-badge",
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 bg-background border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted mb-8">
                        Technical Stack & Certifications
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {tools.map((tool, i) => (
                            <div
                                key={i}
                                className="tool-badge group px-8 py-5 bg-card border border-border hover:border-accent/40 rounded-2xl transition-all duration-300 cursor-default hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)]"
                            >
                                <div className="text-xl font-black text-foreground uppercase tracking-tighter opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
                                    {tool.name}
                                </div>
                                <div className="text-[8px] font-black uppercase text-accent tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {tool.category}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
