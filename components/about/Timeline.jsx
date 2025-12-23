"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    { year: "2015", title: "The Foundation", description: "Trinayana Solution started as a small consultancy for AutoCAD drawings and structural analysis." },
    { year: "2018", title: "Expanding Horizons", description: "Launched our IT services division to bridge the gap between engineering and digital technology." },
    { year: "2021", title: "Digital Integration", description: "Developed full-scale digital infrastructure for large construction projects and government contracts." },
    { year: "2024", title: "Future Ready", description: "Consolidating our presence as a leader in Civil Engineering + IT Innovation, delivering premium scalable solutions." },
];

export default function Timeline() {
    const lineRef = useRef(null);

    useEffect(() => {
        const items = gsap.utils.toArray(".timeline-item");

        gsap.fromTo(lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-container",
                    start: "top 20%",
                    end: "bottom 80%",
                    scrub: true,
                }
            }
        );

        items.forEach((item, i) => {
            gsap.fromTo(item,
                { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <div className="timeline-container relative max-w-4xl mx-auto py-20 px-6">
            <div
                ref={lineRef}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-accent/20 origin-top"
            />

            {timelineData.map((item, i) => (
                <div
                    key={i}
                    className={`timeline-item relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* Year Circle */}
                    <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-10 md:w-14 h-10 md:h-14 bg-foreground border-4 border-background rounded-full z-10 flex items-center justify-center text-background text-[10px] md:text-sm font-black shadow-xl">
                        {item.year.slice(-2)}
                    </div>

                    <div className={`md:w-1/2 w-full pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-16 text-left md:text-right" : "md:pr-16 text-left"}`}>
                        <div className={`hidden md:inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-black uppercase tracking-tighter mb-4 rounded-full`}>
                            {item.year}
                        </div>
                        <div className="md:hidden text-[10px] font-black text-accent uppercase tracking-widest mb-2">Year {item.year}</div>
                        <h4 className="text-2xl md:text-3xl font-black text-foreground uppercase mb-3 leading-none">{item.title}</h4>
                        <p className="text-muted font-medium text-sm md:text-base leading-relaxed">{item.description}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                </div>
            ))}
        </div>
    );
}
