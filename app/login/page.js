"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { LogIn, AlertCircle } from "lucide-react";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

export default function LoginPage() {
    const [error, setError] = useState(null);
    const router = useRouter();

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
        <div className="relative pt-32 pb-20 bg-creamy-milk min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full px-6">
                <div className="text-center mb-12">
                    <h1 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Welcome Back</h1>
                    <h2 className="text-4xl font-black text-primary uppercase">Login.</h2>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl -ml-10 -mt-10" />

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Email Address</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="admin@trinayana.com"
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.email && touched.email ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full bg-creamy-milk/50 border-2 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-primary/20 ${errors.password && touched.password ? "border-red-500/50" : "border-transparent"
                                            }`}
                                    />
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-xs font-bold flex items-center gap-2 border border-red-100">
                                        <AlertCircle size={16} />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-creamy-milk py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-primary/10"
                                >
                                    {isSubmitting ? "Authenticating..." : "Login"}
                                    <LogIn size={18} />
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="mt-8 text-center text-xs font-bold text-primary/40 uppercase tracking-widest">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-accent hover:underline decoration-2 underline-offset-4">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
