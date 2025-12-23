"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Phone, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HeroContent() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const btnRef = useRef(null);
    const visualRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.5,
            onComplete: () => {
                if (typeof window !== "undefined") {
                    ScrollTrigger.refresh();
                }
            }
        });

        tl.fromTo(
            ".char",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power4.out" }
        );

        tl.fromTo(
            subRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );

        tl.fromTo(
            btnRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.3"
        );

        tl.fromTo(
            visualRef.current,
            { scale: 0.9, opacity: 0, y: 50 },
            { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
            "-=1"
        );
    }, []);

    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        >
            {/* Immersive Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/construction-tech-hero.png"
                    alt="Engineering Infrastructure"
                    fill
                    className="object-cover opacity-60 mix-blend-multiply transition-opacity duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/60 to-background" />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 max-w-6xl w-full">
                {/* Authority Label */}
                <div className="mb-8 inline-flex items-center gap-3 px-8 py-3 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-widest backdrop-blur-md">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    Pioneering Engineering & Digital Future
                </div>

                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter leading-[0.85] md:leading-[0.8] uppercase mb-10 text-foreground drop-shadow-2xl"
                >
                    {splitText("Smart Civil")}
                    <br />
                    <span className="text-accent italic drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">
                        {splitText("& IT Solutions")}
                    </span>
                </h1>

                <p
                    ref={subRef}
                    className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed tracking-wide opacity-80"
                >
                    Structural design, project management, and digital
                    transformation for modern infrastructure. We build the future with absolute precision.
                </p>

                <div ref={btnRef} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link href="/contact" className="group px-12 py-7 bg-accent text-accent-foreground rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:shadow-[0_30px_60px_rgba(16,185,129,0.5)] hover:-translate-y-2 transition-all active:scale-95 w-full sm:w-auto justify-center shadow-xl">
                        <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                        Get Consultation
                    </Link>
                    <Link href="/contact" className="group px-12 py-7 bg-secondary text-secondary-foreground border border-border rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-foreground hover:text-background transition-all active:scale-95 w-full sm:w-auto justify-center backdrop-blur-xl">
                        <FileText size={18} />
                        Request Quote
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40 group cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground">Explore</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent animate-bounce shadow-[0_0_15px_rgba(16,185,129,1)]" />
            </div>
        </section>
    );
}
