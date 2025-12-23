"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
import Link from "next/link";
import { ArrowRight, CheckCircle2, Ruler, Building2, HardHat, Compass, FileText } from "lucide-react";
import SceneWrapper from "@/components/three/SceneWrapper";
import AboutScene from "@/components/three/AboutScene";

import { servicesData } from "@/lib/servicesData";

export default function CivilEngineeringPage() {
    const containerRef = useRef(null);
    const civilServices = servicesData.filter(s => s.category === 'civil');

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
            {/* ... (3D Background Accent) ... */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
                <SceneWrapper>
                    <AboutScene />
                </SceneWrapper>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-24 text-center">
                    <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 reveal">Physical Precision</h1>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-[0.9] mb-8 reveal">
                        Civil <br />
                        <span className="text-accent italic">Engineering.</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-base md:text-lg text-muted font-medium leading-relaxed reveal">
                        Trinayana Solution sets the benchmark for engineering excellence in Nepal.
                        We combine traditional expertise with cutting-edge simulation technology to build
                        structures that stand the test of time.
                    </p>
                </div>

                {/* Hero Image Section */}
                <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden mb-32 shadow-2xl reveal">
                    <Image
                        src="/images/civil-hero.png"
                        alt="Civil Engineering Excellence"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-black text-background uppercase tracking-tighter mb-2">Quality & Integrity</h3>
                            <p className="text-background/60 font-bold uppercase tracking-widest text-[10px]">ISO 9001:2015 Standards Followed</p>
                        </div>
                        <Link href="/contact" className="w-full md:w-auto text-center px-10 py-5 bg-accent text-accent-foreground font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-background hover:text-foreground transition-all shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                            Get Quote
                        </Link>
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    {civilServices.map((service, i) => (
                        <Link
                            key={i}
                            href={`/services/${service.slug}`}
                            className="group p-8 md:p-16 bg-card border border-border backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] shadow-xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 block reveal hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-accent">
                                    <Building2 className="w-10 h-10" />
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
                                        <CheckCircle2 size={18} className="text-accent shrink-0" />
                                        <span className="text-xs font-black uppercase tracking-widest text-muted">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Workflow / CTA Section */}
                <div className="bg-foreground rounded-[4rem] p-12 md:p-24 text-background relative overflow-hidden reveal">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                                Ready to <span className="text-accent italic">Break Ground?</span>
                            </h3>
                            <p className="text-xl opacity-70 mb-10 leading-relaxed font-medium">
                                Our team of engineers and architects are ready to bring your vision to life.
                                Let&apos;s build something extraordinary together.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-12 py-6 bg-accent text-accent-foreground rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-transform">
                                    Start Project <ArrowRight size={20} />
                                </Link>
                                <a href="tel:+97712345678" className="px-12 py-6 border-2 border-background/20 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-all">
                                    Call Expert
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10">
                                <h5 className="text-xs font-black uppercase tracking-widest text-accent mb-8">Expert Consultations</h5>
                                <div className="space-y-6">
                                    {[
                                        { label: "Site Investigation", time: "Day 1-3" },
                                        { label: "Preliminary Design", time: "Day 4-7" },
                                        { label: "Municipal Drawing", time: "Week 2" },
                                        { label: "Construction Plan", time: "Final" }
                                    ].map((step, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <span className="font-bold uppercase tracking-widest text-xs">{step.label}</span>
                                            <span className="text-[10px] font-black uppercase px-3 py-1 bg-accent/20 text-accent rounded-full">{step.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
