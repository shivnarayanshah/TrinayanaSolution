"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SceneWrapper from "@/components/three/SceneWrapper";
import AboutScene from "@/components/three/AboutScene";
import Timeline from "@/components/about/Timeline";
import { Eye, ShieldCheck, Target, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const philosophy = [
    {
        title: "The First Eye: Precision",
        icon: <Target className="w-12 h-12 text-accent" />,
        desc: "In engineering, millimeters matter. We apply rigorous mathematical precision to every structural calculation and line of code."
    },
    {
        title: "The Second Eye: Innovation",
        icon: <Zap className="w-12 h-12 text-accent" />,
        desc: "We look beyond the present. By integrating BIM, AI, and Cloud technology, we solve tomorrow's infrastructure challenges today."
    },
    {
        title: "The Third Eye: Integrity",
        icon: <ShieldCheck className="w-12 h-12 text-accent" />,
        desc: "Trust is our foundation. We maintain radical transparency in our estimations, timelines, and construction quality."
    }
];

export default function AboutPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-32 pb-24 bg-background relative overflow-hidden">
            {/* Background 3D */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <SceneWrapper>
                    <AboutScene />
                </SceneWrapper>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="mb-32">
                    <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 reveal">Behind the Vision</h1>
                    <h2 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-9xl font-black text-foreground uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-12 reveal">
                        Engineering <br />
                        <span className="text-accent italic">Intelligence.</span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <p className="text-2xl text-muted font-medium leading-relaxed reveal">
                            Trinayana Solution was born from a simple observation: the physical and digital
                            worlds of infrastructure are converging. We built a company that speaks both languages fluently.
                        </p>
                        <div className="space-y-8 reveal">
                            <p className="text-lg text-muted font-medium leading-relaxed">
                                Based in Kathmandu, Nepal, we serve as a multi-disciplinary hub where Civil Engineers
                                and Software Architects collaborate on the same projects. This unique synergy allows us
                                to deliver infrastructure that isn&apos;t just built—it&apos;s optimized.
                            </p>
                            <div className="flex gap-12 border-t border-border pt-8">
                                <div>
                                    <div className="text-4xl font-black text-foreground uppercase">10+</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-accent">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-foreground uppercase">50+</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-accent">Projects Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="mb-40">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted mb-16 text-center reveal">The Trinayana Philosophy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {philosophy.map((item, i) => (
                            <div key={i} className="p-8 sm:p-12 bg-card rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-border hover:border-accent/40 transition-colors reveal group">
                                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                <h4 className="text-2xl font-black text-foreground uppercase tracking-tighter mb-6">{item.title}</h4>
                                <p className="text-muted font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mb-40 reveal">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted mb-20 text-center">Our Journey</h3>
                    <Timeline />
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    <div className="p-10 sm:p-16 bg-foreground text-background rounded-[3rem] md:rounded-[4rem] reveal">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-8">Our Mission</h4>
                        <p className="text-2xl sm:text-3xl font-medium leading-tight">
                            To digitize the construction landscape of Nepal by providing
                            unmatched engineering precision through technological innovation.
                        </p>
                    </div>
                    <div className="p-10 sm:p-16 bg-card border border-border rounded-[3rem] md:rounded-[4rem] reveal shadow-2xl">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-8">Our Vision</h4>
                        <p className="text-2xl sm:text-3xl font-medium leading-tight text-foreground">
                            To be the leading global partner for smart infrastructure solutions,
                            where every structure is a testament to quality.
                        </p>
                    </div>
                </div>

                {/* Global CTA */}
                <div className="text-center reveal">
                    <h5 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter mb-10">
                        Ready to Build the <span className="text-accent italic">Future?</span>
                    </h5>
                    <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-accent text-accent-foreground rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl">
                        Work With Us <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
