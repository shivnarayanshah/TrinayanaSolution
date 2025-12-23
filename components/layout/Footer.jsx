"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground pt-32 pb-12 relative overflow-hidden border-t border-border">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-background mb-8 block group flex items-center gap-2">
                            <span className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-accent-foreground text-xl shadow-[0_0_25px_rgba(16,185,129,0.5)]">T</span>
                            <span className="uppercase italic tracking-tighter">Trinayana.</span>
                        </Link>
                        <p className="text-background/40 text-sm font-medium leading-relaxed mb-10 max-w-xs">
                            Pioneering the intersection of Civil Engineering and Digital Technology across Nepal.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-10">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/civil" className="text-background/60 hover:text-background text-sm font-bold uppercase tracking-tight transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all" /> Civil Engineering</Link></li>
                            <li><Link href="/it" className="text-background/60 hover:text-background text-sm font-bold uppercase tracking-tight transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all" /> IT & Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-10">Contact</h4>
                        <ul className="space-y-6 text-sm font-medium text-background/60">
                            <li className="flex items-center gap-4 hover:text-background transition-colors cursor-default"><div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center text-accent flex-shrink-0"><MapPin size={18} /></div> Kathmandu, Nepal</li>
                            <li className="flex items-center gap-4 hover:text-background transition-colors cursor-default"><div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center text-accent flex-shrink-0"><Mail size={18} /></div> info@trinayana.com</li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-10">Follow Us</h4>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-background/5 border border-background/10 flex items-center justify-center text-background hover:bg-accent hover:border-accent hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all duration-500 hover:-translate-y-1">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black uppercase tracking-widest text-background/20">
                        © {new Date().getFullYear()} Trinayana Solution. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-background/20">
                        <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
