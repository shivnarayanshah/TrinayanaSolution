import Link from "next/link";
import SceneWrapper from "@/components/three/SceneWrapper";
import HeroScene from "@/components/three/HeroScene";

export default function NotFound() {
    return (
        <div className="relative h-screen flex items-center justify-center bg-creamy-milk overflow-hidden">
            <SceneWrapper>
                <HeroScene />
            </SceneWrapper>

            <div className="relative z-10 text-center px-6">
                <h1 className="text-[12rem] md:text-[20rem] font-black leading-none text-primary opacity-10 select-none">
                    404
                </h1>
                <div className="mt-[-4rem] md:mt-[-8rem]">
                    <h2 className="text-3xl md:text-5xl font-black text-primary uppercase mb-6 tracking-tight">
                        Structure Not Found.
                    </h2>
                    <p className="max-w-md mx-auto text-primary/60 font-medium mb-10">
                        The page you are looking for has been moved or doesn&apos;t exist in our current digital blueprint.
                    </p>
                    <Link
                        href="/"
                        className="px-12 py-5 bg-primary text-creamy-milk rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
