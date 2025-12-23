"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroContent() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        tl.fromTo(
            ".char",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power4.out" }
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
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
        >
            <div className="max-w-5xl">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] uppercase overflow-hidden"
                >
                    {splitText("Engineering the Physical World")}
                    <br />
                    <span className="text-accent italic">
                        {splitText("& Building The")}
                    </span>
                    <br />
                    {splitText("Digital Future")}
                </h1>

                <p
                    ref={subRef}
                    className="mt-8 text-lg md:text-xl text-primary/70 max-w-2xl mx-auto font-medium"
                >
                    Premium Civil Engineering solutions integrated with State-of-the-Art IT Services.
                    We bridge the gap between physical structures and digital excellence.
                </p>

                <div ref={btnRef} className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="px-10 py-5 bg-primary text-creamy-milk rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl active:scale-95">
                        Our Services
                    </button>
                    <button className="px-10 py-5 border-2 border-primary text-primary rounded-full text-lg font-bold hover:bg-primary hover:text-creamy-milk transition-all active:scale-95">
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}
