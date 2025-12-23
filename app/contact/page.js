"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
    Send,
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Construction,
    Laptop,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    service: Yup.string().oneOf(["civil", "it", "other"]).required("Required"),
    message: Yup.string().min(10, "Too short").required("Required"),
});

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const reveals = gsap.utils.toArray(".reveal");
            reveals.forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            service: "civil",
            message: "",
        },
        validationSchema: ContactSchema,
        onSubmit: async (values) => {
            setIsSubmitting(true);
            try {
                const result = await submitContactForm(values);
                if (result.success) {
                    setSuccess(true);
                    formik.resetForm();
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsSubmitting(false);
                setTimeout(() => setSuccess(false), 5000);
            }
        },
    });

    return (
        <div ref={containerRef} className="pt-32 pb-24 bg-background relative">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-32 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <h1 className="text-sm font-bold uppercase tracking-[0.5em] text-accent mb-6 reveal">Initiate Project</h1>
                    <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-none reveal">
                        Start a <br />
                        <span className="text-accent italic">Conversation.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Contact Info & Action Cards */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="reveal">
                            <p className="text-xl text-muted font-medium leading-relaxed mb-10">
                                Have a vision? We have the technical expertise to make it happen.
                                Choose your department or fill out the form for a general inquiry.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg text-accent group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">Call Us</h4>
                                        <p className="text-xl font-black text-foreground">+977 123456789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg text-accent group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">Email Us</h4>
                                        <p className="text-xl font-black text-foreground">info@trinayana.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg text-accent group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">Our Location</h4>
                                        <p className="text-xl font-black text-foreground">Kathmandu, Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Department Shortcuts */}
                        <div className="space-y-4 reveal">
                            <h3 className="text-xs font-black uppercase tracking-widest text-muted">Direct Department Access</h3>

                            <a href="https://wa.me/+977XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block p-6 bg-card border border-border rounded-3xl hover:border-accent/40 shadow-xl transition-all group">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                                            <Construction size={20} />
                                        </div>
                                        <div>
                                            <h5 className="font-black text-foreground uppercase text-sm">Civil Division</h5>
                                            <p className="text-[10px] font-bold text-muted uppercase">WhatsApp Inquiry</p>
                                        </div>
                                    </div>
                                    <MessageCircle size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </a>

                            <a href="https://wa.me/+977XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block p-6 bg-card border border-border rounded-3xl hover:border-accent/40 shadow-xl transition-all group">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                                            <Laptop size={20} />
                                        </div>
                                        <div>
                                            <h5 className="font-black text-foreground uppercase text-sm">IT Division</h5>
                                            <p className="text-[10px] font-bold text-muted uppercase">WhatsApp Inquiry</p>
                                        </div>
                                    </div>
                                    <MessageCircle size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <div className="lg:col-span-7 reveal">
                        <div className="bg-card p-10 md:p-16 rounded-[4rem] shadow-2xl border border-border relative overflow-hidden">
                            {success && (
                                <div className="absolute inset-0 z-20 bg-foreground/95 backdrop-blur-md flex flex-col items-center justify-center text-background p-12 text-center animate-in fade-in duration-500">
                                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 size={40} className="text-accent-foreground" />
                                    </div>
                                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Transmission Successful!</h3>
                                    <p className="text-background/60 text-lg mb-8">Thank you for reaching out. An expert from the selected department will contact you shortly.</p>
                                    <button onClick={() => setSuccess(false)} className="text-xs font-black uppercase tracking-widest text-accent border-b border-accent pb-1">Send Another Message</button>
                                </div>
                            )}

                            <form onSubmit={formik.handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Full Name</label>
                                        <input
                                            {...formik.getFieldProps("name")}
                                            className="w-full px-6 py-5 bg-secondary/40 border border-border focus:border-accent/30 rounded-2xl outline-none transition-all font-bold text-foreground"
                                            placeholder="e.g. John Doe"
                                        />
                                        {formik.touched.name && formik.errors.name && <p className="text-[10px] font-bold text-red-500 ml-1">{formik.errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Email Address</label>
                                        <input
                                            {...formik.getFieldProps("email")}
                                            className="w-full px-6 py-5 bg-secondary/40 border border-border focus:border-accent/30 rounded-2xl outline-none transition-all font-bold text-foreground"
                                            placeholder="john@example.com"
                                        />
                                        {formik.touched.email && formik.errors.email && <p className="text-[10px] font-bold text-red-500 ml-1">{formik.errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Phone Number</label>
                                        <input
                                            {...formik.getFieldProps("phone")}
                                            className="w-full px-6 py-5 bg-secondary/40 border border-border focus:border-accent/30 rounded-2xl outline-none transition-all font-bold text-foreground"
                                            placeholder="+977 123456789"
                                        />
                                        {formik.touched.phone && formik.errors.phone && <p className="text-[10px] font-bold text-red-500 ml-1">{formik.errors.phone}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Service Required</label>
                                        <select
                                            {...formik.getFieldProps("service")}
                                            className="w-full px-6 py-5 bg-secondary/40 border border-border focus:border-accent/30 rounded-2xl outline-none transition-all font-bold text-foreground appearance-none cursor-pointer"
                                        >
                                            <option value="civil">Civil Engineering / Construction</option>
                                            <option value="it">IT Services / Software</option>
                                            <option value="other">General Inquiry / Feedback</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Project Details</label>
                                    <textarea
                                        {...formik.getFieldProps("message")}
                                        className="w-full px-6 py-5 bg-secondary/40 border border-border focus:border-accent/30 rounded-2xl outline-none transition-all font-bold text-foreground min-h-[200px]"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                    {formik.touched.message && formik.errors.message && <p className="text-[10px] font-bold text-red-500 ml-1">{formik.errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-accent text-accent-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 active:scale-[0.98] transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? "Transmitting..." : "Send Message"}
                                    <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
