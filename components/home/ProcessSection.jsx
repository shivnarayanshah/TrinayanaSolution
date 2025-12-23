"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Search, PenTool, Terminal, CheckCircle, Truck, LifeBuoy } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    { icon: Search, title: "Requirement Analysis", desc: "Consultation to define project goals and technical constraints." },
    { icon: PenTool, title: "Planning & Design", desc: "Detailed blueprints and architecture using high-end engineering tools." },
    { icon: Terminal, title: "Execution & Development", desc: "Physical construction and custom software development phase." },
    { icon: CheckCircle, title: "Quality Check", desc: "Rigorous testing and structural analysis for compliance." },
    { icon: Truck, title: "Delivery", desc: "Final handover of physical structures and digital platforms." },
    { icon: LifeBuoy, title: "Ongoing Support", desc: "Maintenance, updates, and 24/7 technical assistance." },
];

export default function ProcessSection() {
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".process-step",
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".process-container",
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".process-container",
                        start: "top 70%",
                        end: "bottom 90%",
                        scrub: true
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Our Operations</h2>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase tracking-tighter">
                        How We <span className="text-accent italic">Work.</span>
                    </h3>
                </div>

                <div className="process-container relative max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* Vertical Linkage Line */}
                    <div ref={lineRef} className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-accent/20 origin-top" />

                    <div className="space-y-16">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`process-step relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Icon Hub */}
                                <div className="absolute left-[-12px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-foreground rounded-xl flex items-center justify-center text-background z-10 border-4 border-background shadow-xl ring-4 ring-accent/10">
                                    <step.icon size={18} className="md:size-5" />
                                </div>

                                <div className={`md:w-1/2 w-full pl-6 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">Step 0{i + 1}</div>
                                    <h4 className="text-2xl font-black text-foreground uppercase mb-3">{step.title}</h4>
                                    <p className="text-muted text-sm font-medium leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0 inline-block">
                                        {step.desc}
                                    </p>
                                </div>
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
