"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Civil Engineering", href: "/civil" },
    { name: "IT Services", href: "/it" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        // Initial entrance animation
        const tl = gsap.timeline();
        tl.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
        );
        tl.fromTo(
            logoRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
            "-=0.5"
        );
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Lock scroll when menu is open
            document.body.style.overflow = "hidden";

            gsap.to(menuRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power4.out",
            });
            gsap.fromTo(
                ".mobile-link",
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3 }
            );
        } else {
            document.body.style.overflow = "auto";

            gsap.to(menuRef.current, {
                y: "-100%",
                opacity: 0,
                duration: 0.6,
                ease: "power4.in",
            });
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Close menu on path change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6"
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-card/60 dark:bg-card/40 backdrop-blur-3xl border border-border rounded-3xl md:rounded-[2.5rem] px-5 py-3 md:px-10 md:py-5 shadow-2xl relative z-50">
                {/* Logo */}
                <Link href="/" ref={logoRef} className="text-xl md:text-3xl font-black tracking-tighter text-foreground group flex items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-lg md:rounded-xl flex items-center justify-center text-accent-foreground text-lg md:text-xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">T</div>
                    <span className="uppercase italic tracking-tighter hidden sm:inline-block">Trinayana.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-foreground relative group py-2 ${pathname === link.href ? "text-accent" : "text-muted"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <Link
                        href="/login"
                        className="hidden md:flex px-8 py-4 bg-accent text-accent-foreground rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all active:scale-95 shadow-lg"
                    >
                        Dashboard
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-foreground z-50 p-2 hover:bg-muted/10 rounded-xl transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden -translate-y-full opacity-0 pointer-events-none data-[open=true]:pointer-events-auto transition-colors duration-500"
                data-open={isOpen}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="mobile-link text-3xl font-black text-foreground hover:text-accent transition-all uppercase tracking-tighter text-center"
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="pt-8 mobile-link flex flex-col items-center gap-6 w-full px-12">
                    <div className="w-full flex justify-center">
                        <ThemeToggle />
                    </div>
                    <Link
                        href="/login"
                        className="w-full text-center px-12 py-5 bg-accent text-accent-foreground rounded-2xl text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(16,185,129,0.6)]"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </header>
    );
}
