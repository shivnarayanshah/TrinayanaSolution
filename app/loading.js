export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] animate-pulse" />

            <div className="relative z-10">
                {/* Outer High-Tech Ring */}
                <div className="w-32 h-32 border-[2px] border-white/5 rounded-full animate-spin-slow relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]" />
                </div>

                {/* Animated Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent rounded-full animate-ping opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 border-t-2 border-accent rounded-full animate-spin" />
                </div>
            </div>

            <div className="mt-16 text-center relative z-10">
                <h2 className="text-[10px] font-black uppercase tracking-[1.5em] text-white/40 mr-[-1.5em]">
                    Initializing <span className="text-accent italic">Trinayana</span>
                </h2>
                <div className="mt-6 w-56 h-[1px] bg-white/5 mx-auto relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-accent w-full translate-x-[-100%] animate-loading-bar shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                </div>
            </div>
        </div>
    );
}
