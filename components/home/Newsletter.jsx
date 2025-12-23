"use client";

import { Mail, Sparkles } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-foreground rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl border border-border">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-black uppercase tracking-widest mb-6">
                                <Sparkles size={12} />
                                Stay Ahead of the Curve
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-background uppercase leading-tight tracking-tighter mb-6">
                                Join 500+ <br />
                                <span className="text-accent italic">Professionals.</span>
                            </h3>
                            <p className="text-background/60 font-medium text-lg leading-relaxed">
                                Get monthly insights on Engineering trends, IT innovations,
                                and exclusive project updates delivered to your inbox.
                            </p>
                        </div>

                        <div className="relative">
                            <form className="flex flex-col md:flex-row gap-4">
                                <div className="flex-grow relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-background/30" size={20} />
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full pl-16 pr-8 py-6 bg-background/5 border border-background/10 rounded-2xl text-background placeholder:text-background/20 focus:outline-none focus:border-accent transition-all font-bold"
                                    />
                                </div>
                                <button className="px-10 py-6 bg-accent text-accent-foreground font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap">
                                    Subscribe Now
                                </button>
                            </form>
                            <p className="mt-4 text-[10px] font-bold text-background/30 uppercase tracking-[0.2em] text-center md:text-left">
                                * We respect your privacy. No spam, ever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
