"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
import Link from "next/link";
import { ArrowRight, Laptop, Code, Cloud, Database, Cpu, Layers, CheckCircle2 } from "lucide-react";
import SceneWrapper from "@/components/three/SceneWrapper";
import HeroScene from "@/components/three/HeroScene";

import { servicesData } from "@/lib/servicesData";

export default function ITServicesPage() {
    const containerRef = useRef(null);
    const itServices = servicesData.filter(s => s.category === 'it');

    useEffect(() => {
        const ctx = gsap.context(() => {
            const reveals = gsap.utils.toArray(".reveal");
            reveals.forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-32 pb-24 bg-background">
            {/* 3D Background Accent */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
                <SceneWrapper>
                    <HeroScene />
                </SceneWrapper>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-24 text-center">
                    <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 reveal">Digital Intelligence</h1>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 reveal text-foreground">
                        IT & <br />
                        <span className="text-accent italic">Technology.</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-base md:text-lg text-muted font-medium leading-relaxed reveal">
                        Empowering the infrastructure sector with modern digital tools. At Trinayana,
                        we don&apos;t just build code; we build the digital foundation for a smarter,
                        more efficient engineering future.
                    </p>
                </div>

                {/* Hero Image Section */}
                <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden mb-32 shadow-2xl reveal border border-white/5">
                    <Image
                        src="/images/it-hero.png"
                        alt="IT Solutions for Engineering"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-background">Automate. Scale. Secure.</h3>
                            <p className="text-accent font-bold uppercase tracking-widest text-xs">Full Stack Engineering Intelligence</p>
                        </div>
                        <Link href="/contact" className="w-full md:w-auto text-center px-10 py-5 bg-accent text-accent-foreground font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-background hover:text-foreground transition-all shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                            Discuss Project
                        </Link>
                    </div>
                </div>

                {/* Tech Stack Horizontal Scroll or Grid */}
                <div className="mb-32 reveal">
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-30 text-foreground">
                        {['NEXT.JS', 'TYPESCRIPT', 'AWS', 'POSTGRES', 'PYTHON', 'REACT NATIVE'].map((tech) => (
                            <span key={tech} className="text-2xl font-black uppercase tracking-tighter hover:text-accent transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                    {itServices.map((service, i) => (
                        <Link
                            key={i}
                            href={`/services/${service.slug}`}
                            className="group p-8 md:p-12 bg-card border border-border backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 block reveal hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-accent">
                                    <Code className="w-10 h-10" />
                                </div>
                                <ArrowRight className="text-muted/20 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                            </div>
                            <h4 className="text-3xl font-black text-foreground uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-muted font-medium leading-relaxed mb-10 text-lg">
                                {service.shortDesc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.details.benefits.map((benefit, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="text-accent shrink-0" />
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-foreground rounded-[4rem] p-12 md:p-24 text-background relative overflow-hidden reveal">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -ml-48 -mb-48" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                                Future-Proof Your <br />
                                <span className="text-accent italic">Operations.</span>
                            </h3>
                            <p className="text-xl text-background/60 mb-10 leading-relaxed font-medium">
                                Stop struggling with manual workflows. Let our IT experts design
                                a solution that works as hard as you do.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-12 py-6 bg-accent text-accent-foreground rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                                    Request Demo <Cpu size={20} />
                                </Link>
                                <Link href="/about" className="px-12 py-6 border-2 border-background/20 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-all">
                                    Our Method
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block relative aspect-square">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full border-2 border-dashed border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
                                <div className="absolute w-2/3 h-2/3 border-2 border-primary/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <Laptop size={120} className="text-accent opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
