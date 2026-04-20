import Hero from "@/sections/Hero";
import About from "@/sections/About";
import HowItWorks from "@/sections/HowItWorks";
import Properties from "@/sections/Properties";
import Developments from "@/sections/Developments";
import Returns from "@/sections/Returns";
import Comparison from "@/sections/Comparision";
import Catalysts from "@/sections/Catalysts";
import Timeline from "@/sections/Timeline";
import Government from "@/sections/Government";
import Benefits from "@/sections/Benefits";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Technology from "@/sections/Technology";
import Insights from "@/sections/Insights";
import FAQ from "@/sections/Faqs";
import CTA from "@/sections/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white flex flex-col">
      <Navbar/>
      {/* 1. HERO - Metrics strip is at the bottom of this component */}
      <Hero />

      {/* 2. WHY US GROUP - Removed -mt-24 so it doesn't cover the Hero strip */}
      <div id="why-us" className="scroll-mt-28 relative z-10">
        <About />
        <div className="-mt-20 md:-mt-32">
          <HowItWorks />
        </div>
        <div className="-mt-16 md:-mt-24">
          <Properties />
        </div>
      </div>

      {/* 3. PROPERTIES GROUP */}
      <div id="properties" className="scroll-mt-28">
        <Developments />
        <div className="-mt-20 md:-mt-32">
          <Benefits />
        </div>
        <div className="-mt-16 md:-mt-24">
          <Catalysts />
        </div>
      </div>

      {/* 4. RETURNS GROUP */}
      <div id="returns" className="scroll-mt-28">
        <Returns />
        <div className="-mt-12 md:-mt-20">
          <Comparison />
        </div>
        {/* <div className="-mt-10 md:-mt-16">
          <Timeline />
        </div> */}
        <Government />
      </div>

      {/* 5. SERVICES GROUP */}
      <div id="services" className="scroll-mt-28">
        <Services />
        <div className="-mt-20 md:-mt-32">
          <Technology />
        </div>
      </div>

      {/* 6. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-28 bg-[#FAF9F6]">
        <Testimonials />
      </div>

      {/* 7. KNOWLEDGE & FAQ */}
      <div id="faq" className="scroll-mt-28">
        <Insights />
        <div className="-mt-16 md:-mt-24">
          <FAQ />
        </div>
      </div>

      {/* 8. CONTACT SECTION */}
      <div id="contact" className="scroll-mt-28">
        <CTA />
      </div>
      <Footer/>
    </main>
  );
}