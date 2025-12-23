import SceneWrapper from "@/components/three/SceneWrapper";
import HeroScene from "@/components/three/HeroScene";
import HeroContent from "@/components/home/HeroContent";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProblemSolution from "@/components/home/ProblemSolution";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import Certifications from "@/components/home/Certifications";
import FinalCTA from "@/components/home/FinalCTA";
import ClientLogos from "@/components/home/ClientLogos";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="relative">
      {/* 01. Hero Section */}
      <HeroContent />

      {/* 01.5 Client Logos Ribbon */}
      <ClientLogos />

      {/* 02. Trust & Credibility */}
      <TrustSection />

      {/* 03. Services (Split Civil & IT) */}
      <ServicesSection />

      {/* 04. Problem → Solution */}
      <ProblemSolution />

      {/* 04.5 FAQ Section */}
      <FAQ />

      {/* 05. Why Choose Us */}
      <WhyChooseUs />


      {/* 06. How We Work (Process) */}
      <ProcessSection />

      {/* 07. Projects / Case Studies */}
      <CaseStudies />

      {/* 08. Testimonials / Client Feedback */}
      <Testimonials />

      {/* 08.5 Newsletter Section */}
      <Newsletter />

      {/* 09. Certifications & Tools */}
      <Certifications />

      {/* 10. Contact / Final CTA */}
      <FinalCTA />
    </div>
  );
}