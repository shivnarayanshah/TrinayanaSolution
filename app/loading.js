export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-creamy-milk flex flex-col items-center justify-center">
            <div className="relative">
                {/* Outer Ring */}
                <div className="w-32 h-32 border-[1px] border-primary/10 rounded-full animate-spin-slow" />
                {/* Animated Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full animate-ping" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-b-2 border-primary rounded-full animate-spin" />
                </div>
            </div>
            <div className="mt-12 text-center">
                <h2 className="text-[10px] font-black uppercase tracking-[1em] text-primary mr-[-1em]">
                    Loading <span className="text-accent">Trinayana</span>
                </h2>
                <div className="mt-4 w-48 h-[1px] bg-primary/10 mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent w-full translate-x-[-100%] animate-loading-bar" />
                </div>
            </div>
        </div>
    );
}
