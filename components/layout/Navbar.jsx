"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

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
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
            });
            gsap.fromTo(
                ".mobile-link",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.2 }
            );
        } else {
            document.body.style.overflow = "auto";

            gsap.to(menuRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.5,
                ease: "power3.in",
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
            className="fixed top-0 left-0 w-full z-50 px-6 py-4"
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-2xl">
                {/* Logo */}
                <Link href="/" ref={logoRef} className="text-2xl font-bold tracking-tighter text-primary">
                    TRINAYANA.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${pathname === link.href ? "text-accent font-bold" : "text-primary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="px-6 py-2 bg-primary text-creamy-milk rounded-full text-sm font-medium hover:scale-105 transition-all active:scale-95"
                    >
                        Dashboard
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-creamy-milk z-40 flex flex-col items-center justify-center space-y-8 md:hidden translate-x-full opacity-0 pointer-events-none data-[open=true]:pointer-events-auto"
                data-open={isOpen}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="mobile-link text-4xl font-bold text-primary hover:text-accent transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/login"
                    className="mobile-link px-10 py-4 bg-primary text-creamy-milk rounded-full text-xl font-bold shadow-lg"
                >
                    Dashboard
                </Link>
            </div>
        </header>
    );
}
