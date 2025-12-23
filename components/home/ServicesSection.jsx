"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Construction, Laptop, ArrowRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

import { servicesData } from "@/lib/servicesData";
import Link from "next/link";

export default function ServicesSection() {
    const sectionRef = useRef(null);

    const civilServices = servicesData.filter(h => h.category === 'civil').slice(0, 3);
    const itServices = servicesData.filter(h => h.category === 'it').slice(0, 3);

    useEffect(() => {
        const cards = gsap.utils.toArray(".service-card");
        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    const renderGrid = (services, theme = "light", icon, divisionLink) => (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {services.map((service, i) => (
                    <Link
                        key={i}
                        href={`/services/${service.slug}`}
                        className={`service-card group relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 bg-zinc-900 border border-zinc-800 hover:border-accent/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] hover:-translate-y-3 block`}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                        </div>

                        <div className="absolute top-8 left-8 z-10">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-accent text-accent-foreground">
                                {icon}
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-10 right-10 z-10">
                            <h4 className="text-2xl font-black text-white uppercase mb-4 leading-tight tracking-tighter group-hover:text-accent transition-colors">
                                {service.title}
                            </h4>
                            <div className="w-12 h-1.5 bg-accent mb-4 group-hover:w-24 transition-all duration-700 rounded-full" />
                            <p className="text-white/60 text-sm font-medium leading-relaxed mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                {service.shortDesc}
                            </p>
                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-accent opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Explore Solution <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center">
                <Link
                    href={divisionLink}
                    className="group flex items-center gap-6 px-10 py-5 bg-accent text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:shadow-[0_20px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all"
                >
                    Discover All Services
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>
    );

    return (
        <section ref={sectionRef} className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Civil Part */}
                <div id="civil" className="mb-40">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Division 01</h2>
                            <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-8">
                                Civil <br />
                                <span className="text-accent italic">Engineering.</span>
                            </h3>
                            <p className="text-muted font-medium text-lg md:text-xl leading-relaxed">Physical Precision in Design & Construction.</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto">
                            <div className="flex gap-2 mb-4">
                                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={16} className="text-accent" />)}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted">Certified Infrastructure Standards</div>
                        </div>
                    </div>
                    {renderGrid(civilServices, "light", <Construction size={24} />, "/civil")}
                </div>

                {/* IT Part */}
                <div id="it">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Division 02</h2>
                            <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-8">
                                IT & <br />
                                <span className="text-accent italic">Technology.</span>
                            </h3>
                            <p className="text-muted font-medium text-lg md:text-xl leading-relaxed">Digital Excellence for Modern Engineering.</p>
                        </div>
                    </div>
                    {renderGrid(itServices, "dark", <Laptop size={24} />, "/it")}
                </div>
            </div>
        </section>
    );
}
