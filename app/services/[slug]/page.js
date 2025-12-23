"use client";

import { useParams, useRouter } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Info, ListChecks } from "lucide-react";

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const containerRef = useRef(null);

    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        if (!service) return;

        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [service]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <div className="text-center">
                    <h1 className="text-4xl font-black uppercase mb-4">Service Not Found</h1>
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-xl"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="pt-32 pb-24 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="reveal group flex items-center gap-2 text-muted hover:text-accent font-black uppercase tracking-widest text-[10px] mb-12 transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Go Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Visual Side */}
                    <div className="reveal relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <span className="px-4 py-1 bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-widest rounded-full">
                                {service.category} Division
                            </span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <div className="reveal">
                            <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none mb-6">
                                {service.title}
                            </h1>
                            <div className="w-20 h-2 bg-accent" />
                        </div>

                        <div className="reveal">
                            <div className="flex items-center gap-3 text-accent mb-4">
                                <Info size={20} />
                                <h3 className="text-xs font-black uppercase tracking-[0.3em]">Overview</h3>
                            </div>
                            <p className="text-xl text-muted font-medium leading-relaxed">
                                {service.overview}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="reveal p-8 bg-card rounded-[2rem] shadow-lg border border-border">
                                <div className="flex items-center gap-3 text-accent mb-6">
                                    <ListChecks size={20} />
                                    <h3 className="text-[10px] font-black uppercase tracking-widest">Our Process</h3>
                                </div>
                                <ul className="space-y-4">
                                    {service.details.process.map((step, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-muted">
                                            <span className="w-5 h-5 flex items-center justify-center bg-accent/10 rounded-full text-[8px] font-black text-accent">0{i + 1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="reveal p-8 bg-card rounded-[2rem] shadow-lg border border-border">
                                <div className="flex items-center gap-3 text-accent mb-6">
                                    <CheckCircle2 size={20} />
                                    <h3 className="text-[10px] font-black uppercase tracking-widest">Key Benefits</h3>
                                </div>
                                <ul className="space-y-4">
                                    {service.details.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-muted">
                                            <CheckCircle2 size={14} className="text-accent" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="reveal pt-8">
                            <button className="w-full py-6 bg-foreground text-background rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-accent-foreground transition-all shadow-xl">
                                Book This Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
