"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { XCircle, CheckCircle2, AlertTriangle, TrendingUp, Users, Clock } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const comparisons = [
    {
        problem: { title: "Project Delays", desc: "Manual scheduling leading to missed deadlines.", icon: Clock },
        solution: { title: "Automated Workflows", desc: "Real-time AI-driven scheduling & tracking.", icon: CheckCircle2 }
    },
    {
        problem: { title: "Cost Overruns", desc: "Inaccurate estimations causing budget leaks.", icon: AlertTriangle },
        solution: { title: "Accurate BIM Tools", desc: "Precise material take-offs using digital twins.", icon: TrendingUp }
    },
    {
        problem: { title: "Poor Coordination", desc: "Fragmented communication between site & office.", icon: Users },
        solution: { title: "Centralized Dashboard", desc: "Live sync between engineering and IT teams.", icon: CheckCircle2 }
    }
];

export default function ProblemSolution() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".card-container",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
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
                <div className="mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Bridging the Gap</h2>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase leading-tight tracking-tighter">
                        We Solve the <span className="text-accent italic">Inefficiencies</span> <br />
                        of Traditional Engineering.
                    </h3>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {comparisons.map((item, i) => (
                        <div key={i} className="card-container grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Problem Card */}
                            <div className="group p-6 sm:p-10 bg-card rounded-[2.5rem] border border-border relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-3xl" />
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <XCircle size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-foreground uppercase mb-2 line-through opacity-40">{item.problem.title}</h4>
                                        <p className="text-muted text-sm font-medium">{item.problem.desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Solution Card */}
                            <div className="group p-6 sm:p-10 bg-foreground rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                                        <item.solution.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-background uppercase mb-2 flex items-center gap-3">
                                            {item.solution.title}
                                            <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full border border-accent/30 font-black">SOLVED</span>
                                        </h4>
                                        <p className="text-background/60 text-sm font-medium">{item.solution.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
