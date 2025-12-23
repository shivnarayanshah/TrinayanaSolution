"use client";

import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { LogIn, AlertCircle } from "lucide-react";
import gsap from "gsap";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

import Image from "next/image";

export default function LoginPage() {
    const [error, setError] = useState(null);
    const router = useRouter();
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".login-card", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });
            gsap.from(".login-header > *", {
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
        setError(null);
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (result.error) {
                setError(result.error);
            } else {
                router.push("/admin/dashboard");
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div ref={containerRef} className="relative pt-32 pb-20 bg-background min-h-screen flex items-center justify-center overflow-hidden">

            {/* Decorative Blob (Matches Contact Page) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-40 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -ml-40 -mb-20 pointer-events-none" />

            <div className="max-w-md w-full px-6 relative z-10">
                <div className="text-center mb-12 login-header">
                    <h1 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">Portal Access</h1>
                    <h2 className="text-5xl font-black text-foreground uppercase tracking-tighter drop-shadow-2xl">Login.</h2>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden login-card">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -ml-10 -mt-10" />

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-4">Email Address</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="admin@trinayana.com"
                                        className={`w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-5 outline-none focus:border-accent transition-all text-zinc-900 dark:text-zinc-100 font-bold tracking-wide placeholder:text-zinc-400 dark:placeholder:text-zinc-500 ${errors.email && touched.email ? "border-red-500/50" : ""
                                            }`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-4">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-5 outline-none focus:border-accent transition-all text-zinc-900 dark:text-zinc-100 font-bold tracking-wide placeholder:text-zinc-400 dark:placeholder:text-zinc-500 ${errors.password && touched.password ? "border-red-500/50" : ""
                                            }`}
                                    />
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-500/10 text-red-500 rounded-xl text-xs font-bold flex items-center gap-2 border border-red-500/20">
                                        <AlertCircle size={16} />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-accent-foreground py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl"
                                >
                                    {isSubmitting ? "Authenticating..." : "Login"}
                                    <LogIn size={18} />
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="mt-8 text-center text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                        New User?{" "}
                        <Link href="/register" className="text-accent hover:underline decoration-2 underline-offset-4">
                            Register Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
