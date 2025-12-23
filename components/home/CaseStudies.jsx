"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        title: "Mountain Vista Residency",
        type: "Residential",
        impact: "30% Cost Saved via BIM",
        image: "/images/residential.png",
        desc: "Luxury 5-bedroom villa with complex structural integration and smart home automation."
    },
    {
        title: "Skyline Commercial Hub",
        type: "Commercial",
        impact: "15% Faster Delivery",
        image: "/images/civil-hero.png",
        desc: "A 12-story commercial complex featuring state-of-the-art earthquake-resistant engineering."
    },
    {
        title: "Infrastructure Grid 2.0",
        type: "Government",
        impact: "Zero Delay Records",
        image: "/images/it-hero.png",
        desc: "Digital transformation of public works tracking systems for regional infrastructure projects."
    }
];

export default function CaseStudies() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
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
                    <div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Landmark Achievements</h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase tracking-tighter">
                            Featured <span className="text-accent italic">Projects.</span>
                        </h3>
                    </div>
                    <button className="text-xs font-black uppercase tracking-widest text-foreground border-b-2 border-accent pb-2 hover:text-accent transition-colors">
                        View All Case Studies
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <div key={i} className="project-card group cursor-pointer">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute top-6 right-6">
                                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-45 transition-all duration-500 shadow-xl">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-accent text-accent-foreground text-[10px] font-black uppercase rounded-full">
                                            {project.type}
                                        </span>
                                        <span className="text-background/60 text-[10px] font-bold uppercase tracking-widest">
                                            {project.impact}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-2xl font-black text-foreground uppercase mb-3 leading-none group-hover:text-accent transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-muted text-sm font-medium leading-relaxed">
                                {project.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
