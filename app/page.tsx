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

export default function Home() {
  return (
    <main className="relative">
      {/* Hero section doesn't need an ID usually, or can be #home */}
      <Hero />

      {/* Why Us / About Group */}
      <section id="why-us">
        <About />
        <HowItWorks />
        <Benefits />
      </section>

      {/* Properties Group */}
      <section id="properties">
        <Properties />
        <Developments />
        <Catalysts />
      </section>

      {/* Returns & Market Analysis Group */}
      <section id="returns">
        <Returns />
        <Comparison />
        <Timeline />
        <Government />
      </section>

      {/* Services & Tech Group */}
      <section id="services">
        <Services />
        <Technology />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Knowledge & FAQ Group */}
      <section id="faq">
        <Insights />
        <FAQ />
      </section>

      {/* Contact / Lead Generation */}
      <section id="contact">
        <CTA />
      </section>
    </main>
  );
}