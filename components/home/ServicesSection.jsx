"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const civilServices = [
    { title: "AutoCAD Drawing", description: "Precise 2D & 3D technical drawings and modeling.", image: "/images/autocad.png" },
    { title: "Estimation & Costing", description: "Detailed material take-offs and budgeting.", image: "/images/civil-hero.png" },
    { title: "General Evaluation", description: "Comprehensive structural and site assessments.", image: "/images/civil-hero.png" },
    { title: "3D Designs", description: "Immersive architectural visualizations and walkthroughs.", image: "/images/civil-hero.png" },
    { title: "Structural Analysis", description: "Advanced engineering for safe and stable designs.", image: "/images/civil-hero.png" },
    { title: "Floor Plans", description: "User-centric layouts for modern living spaces.", image: "/images/civil-hero.png" },
    { title: "Govt-Approved Drawings", description: "Hassle-free approvals with compliant designs.", image: "/images/civil-hero.png" },
];

const itServices = [
    { title: "Web Development", description: "Fast, scalable, and stunning digital experiences.", image: "/images/web-dev.png" },
    { title: "App Development", description: "Powerful mobile apps for iOS and Android.", image: "/images/it-hero.png" },
    { title: "Digital Marketing", description: "Strategic growth through data-driven campaigns.", image: "/images/it-hero.png" },
    { title: "Facebook Boosting", description: "Targeted ad campaigns to reach your ideal audience.", image: "/images/it-hero.png" },
    { title: "YouTube Boosting", description: "Maximize your video reach and engagement.", image: "/images/it-hero.png" },
    { title: "Instagram Boosting", description: "Visual storytelling that drives results.", image: "/images/it-hero.png" },
];

export default function ServicesSection() {
    const sectionRef = useRef(null);

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
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    const renderGrid = (services, theme = "light") => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
                <div
                    key={i}
                    className={`service-card group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${theme === "dark" ? "bg-primary" : "bg-white"
                        }`}
                >
                    <div className="absolute inset-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                        />
                    </div>
                    <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${theme === "dark" ? "from-primary/90" : "from-black/70"
                        } via-transparent to-transparent`} />

                    <div className="absolute bottom-8 left-8 right-8">
                        <h4 className={`text-2xl font-black mb-3 ${theme === "dark" ? "text-creamy-milk" : "text-white"
                            }`}>
                            {service.title}
                        </h4>
                        <p className={`text-sm leading-relaxed transition-all duration-500 overflow-hidden ${theme === "dark" ? "text-creamy-milk/60" : "text-white/60"
                            }`}>
                            {service.description}
                        </p>
                    </div>

                    {/* Subtle Border Glow */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-accent/40 transition-colors duration-500" />
                </div>
            ))}
        </div>
    );

    return (
        <section ref={sectionRef} className="py-32 bg-creamy-milk">
            <div className="max-w-7xl mx-auto px-6">
                {/* Civil Engineering Section */}
                <div id="civil" className="mb-32">
                    <div className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                            Infrastructure & Design
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight text-primary uppercase mb-8">
                            Civil <span className="text-accent italic">Engineering.</span>
                        </h3>
                        <p className="max-w-2xl text-primary/70 font-medium">
                            From initial sketches to government approvals, we provide full-spectrum engineering services to bring your physical projects to life.
                        </p>
                    </div>
                    {renderGrid(civilServices)}
                </div>

                {/* IT Services Section */}
                <div id="it">
                    <div className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                            Digital Transformation
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight text-primary uppercase mb-8">
                            IT <span className="text-accent italic">Services.</span>
                        </h3>
                        <p className="max-w-2xl text-primary/70 font-medium">
                            Scaling your business in the digital landscape with high-performance tech solutions and strategic marketing.
                        </p>
                    </div>
                    {renderGrid(itServices, "dark")}
                </div>
            </div>
        </section>
    );
}
