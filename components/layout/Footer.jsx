"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-creamy-milk pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-3xl font-black tracking-tighter uppercase mb-6 block">
                            Trinayana.
                        </Link>
                        <p className="text-creamy-milk/50 text-sm font-medium leading-relaxed">
                            Engineering the Physical World & Building the Digital Future. We deliver excellence in construction and technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-accent">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/civil" className="text-sm font-medium hover:text-accent transition-colors">Civil Engineering</Link></li>
                            <li><Link href="/it" className="text-sm font-medium hover:text-accent transition-colors">IT & Marketing</Link></li>
                            <li><Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">Career</Link></li>
                            <li><Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-accent">Contact</h4>
                        <ul className="space-y-4 text-sm font-medium text-creamy-milk/70">
                            <li className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> Kathmandu, Nepal</li>
                            <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /> +977 123456789</li>
                            <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> info@trinayana.com</li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-accent">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-primary transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-primary transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-primary transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-primary transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-creamy-milk/30">
                        © 2024 Trinayana Solution. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-creamy-milk/30">
                        <Link href="#" className="hover:text-creamy-milk transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-creamy-milk transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
