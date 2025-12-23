import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px]" />

            <div className="relative z-10 text-center px-6">
                <h1 className="text-[12rem] md:text-[25rem] font-black leading-none text-white opacity-5 select-none tracking-tighter">
                    404
                </h1>
                <div className="mt-[-6rem] md:mt-[-12rem]">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        Error: Resource Not Located
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase mb-8 tracking-tighter leading-none">
                        Structure <br />
                        <span className="text-accent italic">Not Found.</span>
                    </h2>
                    <p className="max-w-md mx-auto text-white/40 font-medium mb-12 text-lg">
                        The digital blueprint you are following leads to a non-existent node.
                        Let&apos;s get you back to the main framework.
                    </p>
                    <Link
                        href="/"
                        className="group px-12 py-6 bg-accent text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:shadow-[0_20px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all inline-flex items-center gap-4"
                    >
                        Return to Home Framework
                    </Link>
                </div>
            </div>

            {/* Technical Detail */}
            <div className="absolute bottom-12 left-12 hidden md:block opacity-20">
                <div className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Build Version</div>
                <div className="text-[8px] font-bold text-white/50">v2.0.4-STABLE / SYSTEM_OK</div>
            </div>
        </div>
    );
}
