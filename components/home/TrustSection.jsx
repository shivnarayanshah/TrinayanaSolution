"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Award, Construction, Users, BadgeCheck, Globe } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { icon: Construction, label: "Completed Projects", value: "250+", sub: "Public & Private Sector" },
    { icon: Users, label: "Licensed Engineers", value: "15+", sub: "Experts & Consultants" },
    { icon: Award, label: "Years Experience", value: "10+", sub: "Industry Excellence" },
    { icon: ShieldCheck, label: "Compliance & Safety", value: "100%", sub: "ISO & NEC Standards" },
];

const standards = ["ISO 9001:2015", "NEC (National Electrical Code)", "ASTM International", "Government Approved"];

export default function TrustSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".stat-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        onEnter: () => ScrollTrigger.refresh()
                    },
                }
            );

            gsap.fromTo(".trust-badge",
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".trust-badges-container",
                        start: "top 95%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card group p-8 bg-card border border-border rounded-[2rem] hover:border-accent/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                <stat.icon size={32} />
                            </div>
                            <div className="text-4xl font-black text-foreground mb-2 tracking-tighter">{stat.value}</div>
                            <div className="text-xs font-black uppercase text-accent tracking-[0.1em] mb-1">{stat.label}</div>
                            <div className="text-[10px] text-muted font-bold uppercase">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                <div className="trust-badges-container flex flex-wrap items-center justify-center gap-8 md:gap-16 py-12 border-t border-border">
                    <div className="text-muted font-black uppercase tracking-[0.3em] text-[10px] w-full text-center mb-4 md:mb-0 md:w-auto">
                        Trusted Accreditation
                    </div>
                    {standards.map((std, i) => (
                        <div key={i} className="trust-badge flex items-center gap-3 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default">
                            <BadgeCheck className="text-accent" size={20} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{std}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
