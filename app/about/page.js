import SceneWrapper from "@/components/three/SceneWrapper";
import AboutScene from "@/components/three/AboutScene";
import Timeline from "@/components/about/Timeline";

export default function AboutPage() {
    return (
        <div className="relative pt-32 pb-20">
            {/* Background Accent */}
            <SceneWrapper>
                <AboutScene />
            </SceneWrapper>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-24 text-center">
                    <h1 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                        Our Story
                    </h1>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-primary uppercase leading-[0.9]">
                        Engineering Minds. <br />
                        <span className="text-accent italic">Digital Hearts.</span>
                    </h2>
                </div>

                {/* Narrative Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-primary uppercase">Who We Are</h3>
                        <p className="text-lg text-primary/70 font-medium leading-relaxed">
                            Trinayana Solution is a multidisciplinary firm dedicated to excellence in Civil Engineering and IT Services. Founded with a vision to integrate physical robustness with digital intelligence, we provide tailored solutions for modern challenges.
                        </p>
                        <p className="text-lg text-primary/70 font-medium leading-relaxed">
                            Our team consists of expert engineers, high-end developers, and creative designers who work in tandem to deliver projects that are not only structurally sound but also digitally advanced.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] bg-primary rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center text-creamy-milk text-8xl font-black opacity-10 select-none">
                            T.S.
                        </div>
                        {/* You can add another image here if desired */}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-black text-primary uppercase">Our Journey</h3>
                        <p className="text-primary/60 font-medium mt-2">A decade of innovation and growth.</p>
                    </div>
                    <Timeline />
                </div>
            </div>
        </div>
    );
}
