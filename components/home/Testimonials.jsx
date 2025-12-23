"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Quote, Star } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
    {
        text: "Trinayana delivered our structural project on time with excellent technical support. Their digital twin approach saved us weeks of onsite coordination.",
        author: "Rajesh Sharma",
        role: "Project Director",
        company: "Lumbini Construction Group"
    },
    {
        text: "The integration of Civil Engineering with custom IT tools is a game changer. We finally have real-time visibility into our site progress and budget.",
        author: "Sita Thapa",
        role: "Managing Director",
        company: "Urban Developers Nepal"
    },
    {
        text: "Superior technical expertise. Their AutoCAD and BIM models were flawless, and the government approval process was handled with pure professionalism.",
        author: "Dr. Anil Kapur",
        role: "Senior Consultant",
        company: "Heritage Heritage Infrastructure"
    }
];

export default function Testimonials() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonial-card",
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-foreground text-background relative overflow-hidden">
            {/* Decorative Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Client Feedback</h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        Voices of <span className="text-accent italic">Trust.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((item, i) => (
                        <div
                            key={i}
                            className="testimonial-card p-10 bg-background/5 backdrop-blur-xl border border-background/10 rounded-[3rem] flex flex-col justify-between hover:bg-background/10 transition-colors duration-500"
                        >
                            <div>
                                <Quote size={40} className="text-accent mb-8 opacity-40" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}
                                </div>
                                <p className="text-lg font-medium leading-relaxed italic mb-10 opacity-80">
                                    &ldquo;{item.text}&rdquo;
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-black text-xs uppercase">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-black uppercase tracking-widest text-sm">{item.author}</div>
                                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.role} • {item.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
