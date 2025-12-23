import SceneWrapper from "@/components/three/SceneWrapper";
import HeroScene from "@/components/three/HeroScene";
import HeroContent from "@/components/home/HeroContent";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        <SceneWrapper>
          <HeroScene />
        </SceneWrapper>
        <HeroContent />
      </section>

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
}