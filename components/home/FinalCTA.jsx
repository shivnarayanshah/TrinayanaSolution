"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase leading-[0.9] md:leading-[0.85] tracking-tighter mb-8">
                        Let&apos;s Build Smarter <br />
                        <span className="text-accent italic">Infrastructure Together.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted font-medium text-base md:text-lg leading-relaxed">
                        Whether it&apos;s a residential masterpiece or a national infrastructure project,
                        we have the engineering precision and IT intelligence to deliver excellence.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                    <Link href="/contact" className="group w-full sm:w-auto px-12 py-6 bg-accent text-accent-foreground rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_20px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all active:scale-95">
                        Start a Conversation
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <a href="https://wa.me/+97798XXXXXXXX" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-12 py-6 border-2 border-foreground text-foreground rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-foreground hover:text-background transition-all active:scale-95">
                        <MessageCircle size={20} className="text-accent group-hover:text-background transition-colors" />
                        WhatsApp Us
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-20 border-t border-border">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-lg text-accent border border-border"><Phone size={20} /></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted">Call Anytime</span>
                            <span className="text-sm font-black text-foreground">+977 123456789</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-lg text-accent border border-border"><Mail size={20} /></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted">Email Us</span>
                            <span className="text-sm font-black text-foreground">info@trinayana.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-lg text-accent border border-border"><MapPin size={20} /></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted">Our Location</span>
                            <span className="text-sm font-black text-foreground">Kathmandu, Nepal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
