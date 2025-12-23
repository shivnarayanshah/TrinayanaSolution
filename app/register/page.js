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
        <div ref={containerRef} className="relative pt-32 pb-20 bg-creamy-milk min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full px-6">
                <div className="text-center mb-12 register-header">
                    <h1 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Join Us</h1>
                    <h2 className="text-4xl font-black text-primary uppercase">Register.</h2>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/20 relative overflow-hidden register-card">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10" />

                    <Formik
                        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                        validationSchema={RegisterSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-4 relative z-10">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Full Name</label>
                                    <Field
                                        name="name"
                                        placeholder="Engineering Lead"
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.name && touched.name ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Email Address</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.email && touched.email ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.password && touched.password ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Confirm Password</label>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.confirmPassword && touched.confirmPassword ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                {status && (
                                    <div className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 border ${status.type === "success" ? "bg-green-50 text-green-700 border-green-100" :
                                        status.type === "error" ? "bg-red-50 text-red-700 border-red-100" : "bg-accent/10 text-primary border-accent/20"
                                        }`}>
                                        {status.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-creamy-milk py-5 mt-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-primary/10"
                                >
                                    {isSubmitting ? "Creating Account..." : "Register"}
                                    <UserPlus size={18} />
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="mt-8 text-center text-xs font-bold text-primary/40 uppercase tracking-widest">
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
