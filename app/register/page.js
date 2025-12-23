"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { registerUser } from "@/app/actions/auth";
import { UserPlus, AlertCircle, CheckCircle } from "lucide-react";
import gsap from "gsap";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

import Image from "next/image";

export default function RegisterPage() {
    const [status, setStatus] = useState(null);
    const router = useRouter();
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".register-card", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });
            gsap.from(".register-header > *", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = async (values) => {
        setStatus({ type: "loading", message: "Creating your account..." });
        const result = await registerUser({
            name: values.name,
            email: values.email,
            password: values.password,
        });

        if (result.success) {
            setStatus({ type: "success", message: result.message });
            setTimeout(() => router.push("/login"), 2000);
        } else {
            setStatus({ type: "error", message: result.message });
        }
    };

    return (
        <div ref={containerRef} className="relative pt-32 pb-20 bg-background min-h-screen flex items-center justify-center overflow-hidden">

            {/* Decorative Blob (Matches Contact Page) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-40 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -ml-40 -mb-20 pointer-events-none" />

            <div className="max-w-md w-full px-6 relative z-10">
                <div className="text-center mb-12 register-header">
                    <h1 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">Join The Future</h1>
                    <h2 className="text-5xl font-black text-foreground uppercase tracking-tighter drop-shadow-2xl">Register.</h2>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden register-card">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />

                    <Formik
                        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                        validationSchema={RegisterSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-4 relative z-10">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-4">Full Name</label>
                                    <Field
                                        name="name"
                                        placeholder="Engineering Lead"
                                        className={`w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-zinc-900 dark:text-zinc-100 font-bold tracking-wide placeholder:text-zinc-400 dark:placeholder:text-zinc-500 ${errors.name && touched.name ? "border-red-500/50" : ""
                                            }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-4">Email Address</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className={`w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-zinc-900 dark:text-zinc-100 font-bold tracking-wide placeholder:text-zinc-400 dark:placeholder:text-zinc-500 ${errors.email && touched.email ? "border-red-500/50" : ""
                                            }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-4">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-zinc-900 dark:text-zinc-100 font-bold tracking-wide placeholder:text-zinc-400 dark:placeholder:text-zinc-500 ${errors.password && touched.password ? "border-red-500/50" : ""
                                            }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-4">Confirm Password</label>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-zinc-900 dark:text-zinc-100 font-bold tracking-wide placeholder:text-zinc-400 dark:placeholder:text-zinc-500 ${errors.confirmPassword && touched.confirmPassword ? "border-red-500/50" : ""
                                            }`}
                                    />
                                </div>

                                {status && (
                                    <div className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 border ${status.type === "success" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                        status.type === "error" ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-accent/10 text-foreground border-accent/20"
                                        }`}>
                                        {status.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-accent-foreground py-5 mt-4 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl"
                                >
                                    {isSubmitting ? "Creating Account..." : "Register"}
                                    <UserPlus size={18} />
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="mt-8 text-center text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                        Already have an account?{" "}
                        <Link href="/login" className="text-accent hover:underline decoration-2 underline-offset-4">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
