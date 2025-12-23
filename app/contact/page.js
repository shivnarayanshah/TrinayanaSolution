"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { submitContactForm } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    service: Yup.string().required("Required"),
    message: Yup.string().min(10, "Too short!").required("Required"),
});

const services = [
    "AutoCAD Drawing",
    "Estimation & Costing",
    "3D Designs",
    "Structural Analysis",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Other",
];

export default function ContactPage() {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (values, { resetForm }) => {
        setStatus({ type: "loading", message: "Sending your message..." });
        const result = await submitContactForm(values);
        if (result.success) {
            setStatus({ type: "success", message: result.message });
            resetForm();
        } else {
            setStatus({ type: "error", message: result.message });
        }
    };

    return (
        <div className="relative pt-32 pb-20 bg-creamy-milk min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Get in Touch</h1>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-primary uppercase leading-[0.9]">
                        Let&apos;s Build <br />
                        <span className="text-accent italic">Together.</span>
                    </h2>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />

                    <Formik
                        initialValues={{ name: "", email: "", phone: "", service: "", message: "" }}
                        validationSchema={ContactSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Full Name</label>
                                        <Field
                                            name="name"
                                            placeholder="John Doe"
                                            className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.name && touched.name ? "border-red-500/50" : "border-transparent"
                                                }`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Email Address</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="john@trinayana.com"
                                            className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.email && touched.email ? "border-red-500/50" : "border-transparent"
                                                }`}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Phone Number</label>
                                        <Field
                                            name="phone"
                                            placeholder="+977 98XXXXXXXX"
                                            className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.phone && touched.phone ? "border-red-500/50" : "border-transparent"
                                                }`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Service Required</label>
                                        <div className="relative">
                                            <Field
                                                as="select"
                                                name="service"
                                                className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium appearance-none ${errors.service && touched.service ? "border-red-500/50" : "border-transparent"
                                                    }`}
                                            >
                                                <option value="" disabled>Select a service</option>
                                                {services.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </Field>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Message</label>
                                    <Field
                                        name="message"
                                        as="textarea"
                                        rows="4"
                                        placeholder="Briefly describe your requirements..."
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 resize-none ${errors.message && touched.message ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-creamy-milk py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/10"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                    <Send size={18} />
                                </button>

                                {status && (
                                    <div className={`p-6 rounded-2xl flex items-center gap-4 font-bold text-sm animate-in fade-in slide-in-from-top-4 duration-500 ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" :
                                            status.type === "error" ? "bg-red-50 text-red-700 border border-red-200" : "bg-accent/10 text-primary border border-accent/20"
                                        }`}>
                                        {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                        {status.message}
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
