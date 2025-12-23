"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is the typical timeline for a civil project?",
        a: "Timelines vary depending on the scale. Small residential designs take 1-2 weeks, while large commercial structural analysis can take 4-6 weeks. We provide exact milestones during consultation."
    },
    {
        q: "Do you provide municipal approval support?",
        a: "Yes, we handle the entire process of preparing government-approved drawings and can assist in the liaison for municipal permits in various districts."
    },
    {
        q: "How does IT integration benefit my construction business?",
        a: "Our IT solutions like custom ERPs or real-time tracking dashboards prevent cost overruns, optimize labor, and provide data-driven insights for better project management."
    },
    {
        q: "Are your IT services limited to engineering firms?",
        a: "While we specialize in engineering tech, our web development and digital marketing services are available to all businesses looking for premium digital transformation."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-background relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Questions</h2>
                    <h3 className="text-3xl sm:text-4xl font-black text-foreground uppercase tracking-tighter">Frequently Asked <span className="text-accent italic">Questions.</span></h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`border rounded-3xl md:rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl ${openIndex === i ? 'border-accent bg-card shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'border-border bg-card/40 hover:border-accent/30'}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 md:p-10 flex items-center justify-between text-left"
                            >
                                <span className={`text-base md:text-xl font-black uppercase tracking-tight transition-colors duration-500 ${openIndex === i ? 'text-accent' : 'text-foreground'}`}>{faq.q}</span>
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${openIndex === i ? 'bg-accent text-accent-foreground rotate-180 shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-accent/10 text-accent'}`}>
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <div
                                        className="px-8 pb-8"
                                    >
                                        <p className="text-muted font-medium leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
