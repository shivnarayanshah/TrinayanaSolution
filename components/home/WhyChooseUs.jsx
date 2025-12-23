"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Home, Globe, Zap, Cpu, MessageCircle } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
    {
        icon: Home,
        title: "Engineering + IT Integration",
        desc: "The only firm in Nepal providing structural integrity integrated with custom digital dashboards and tracking systems."
    },
    {
        icon: Globe,
        title: "Global Standards, Local Expertise",
        desc: "Cost-effective solutions tailored for Nepal's terrain, adhering to international ISO and ASTM standards."
    },
    {
        icon: Zap,
        title: "Rapid Project Delivery",
        desc: "Our tech-driven estimation and scheduling tools ensure your project is delivered on time, every time."
    },
    {
        icon: Cpu,
        title: "Modern Tools & Tech",
        desc: "Using the latest AutoCAD, Revit, and BIM software along with custom automation tools for maximum precision."
    },
    {
        icon: MessageCircle,
        title: "Transparent Communication",
        desc: "Direct access to our engineers and developers through our proprietary project management portal."
    }
];

export default function WhyChooseUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".reason-card",
                { scale: 0.9, opacity: 0, y: 30 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Strategic Advantage</h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase leading-[0.9] md:leading-none tracking-tighter">
                            Why Trinayana <br />
                            <span className="text-accent italic">Dominates the Sector.</span>
                        </h3>
                    </div>
                    <p className="max-w-xs text-muted text-sm font-medium border-l-2 border-accent pl-6">
                        We don&apos;t just build structures; we build intelligent ecosystems that last for generations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className="reason-card group p-10 bg-card rounded-[3rem] border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-foreground text-background rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                                <item.icon size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-foreground uppercase mb-4">{item.title}</h4>
                            <p className="text-muted text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                    <div className="reason-card p-10 bg-foreground rounded-[3rem] flex flex-col justify-center items-center text-center text-background shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                        <h4 className="text-2xl font-black uppercase mb-4 leading-tight relative z-10">Ready to <br />Transform?</h4>
                        <p className="text-background/50 text-[10px] font-black uppercase tracking-widest mb-8 relative z-10">Start your next project today</p>
                        <Link href="/contact" className="px-10 py-5 bg-accent text-accent-foreground rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:scale-95 transition-all relative z-10">
                            Join Our Clients
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
