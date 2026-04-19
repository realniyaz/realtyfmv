"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  BarChart3, 
  Home, 
  Gavel, 
  Globe, 
  LayoutDashboard, 
  LogOut, 
  Receipt, 
  Headphones, 
  Banknote,
  LucideProps 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const services = [
  {
    title: "Investment Advisory",
    desc: "Personalized investment strategies tailored to your financial goals and risk appetite.",
    tags: ["Risk profiling", "Corridor matching", "Budget optimization"],
    icon: <BarChart3 />
  },
  {
    title: "Property Management",
    desc: "End-to-end management including tenant sourcing, maintenance, and rental collection.",
    tags: ["Tenant sourcing", "Rent collection", "Maintenance"],
    icon: <Home />
  },
  {
    title: "Legal Assistance",
    desc: "Complete legal support for transactions, documentation, and dispute resolution.",
    tags: ["Title verification", "Agreements", "Registration"],
    icon: <Gavel />
  },
  {
    title: "NRI Compliance",
    desc: "FEMA compliance, tax filing, and repatriation support for overseas investors.",
    tags: ["FEMA compliance", "Form 15CA/CB", "Repatriation"],
    icon: <Globe />
  },
  {
    title: "Portfolio Tracking",
    desc: "Real-time dashboards with rental yields, market analytics, and valuation reports.",
    tags: ["Live dashboard", "Reports", "Market insights"],
    icon: <LayoutDashboard />
  },
  {
    title: "Exit Strategy",
    desc: "Strategic exit planning with optimal timing analysis and buyer matching.",
    tags: ["Timing analysis", "Buyer matching", "Tax optimization"],
    icon: <LogOut />
  },
  // {
  //   title: "Tax Planning",
  //   desc: "LTCG optimization, TDS certificates, and DTAA benefit structuring.",
  //   tags: ["LTCG planning", "TDS reduction", "DTAA benefits"],
  //   icon: <Receipt />
  // },
  // {
  //   title: "Dedicated NRI Desk",
  //   desc: "24/7 support with a dedicated relationship manager and virtual consultations.",
  //   tags: ["24/7 support", "Personal RM", "Multi-timezone"],
  //   icon: <Headphones />
  // },
  // {
  //   title: "Home Loan Assistance",
  //   desc: "Tie-ups with top banks for NRI home loans with seamless processing.",
  //   tags: ["Best rates", "Doc processing", "Pre-approval"],
  //   icon: <Banknote />
  // },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={isVisible ? { opacity: 1, letterSpacing: "0.5em" } : {}}
            transition={{ duration: 1 }}
            className="text-[11px] text-[#F5B300] mb-5 font-black uppercase"
          >
            Our Ecosystem
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-tight mb-8"
          >
            End-to-End <span className="italic text-gray-400 font-light">Excellence</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            Beyond brokerage. We provide an institutional-grade infrastructure to manage your 
            wealth, legalities, and logistics across India's highest growth corridors.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[#F5B300]/10"
            >
              {/* ICON BLOCK */}
              <div className="w-14 h-14 rounded-2xl bg-[#0B1C3D]/5 flex items-center justify-center text-[#0B1C3D] group-hover:bg-[#F5B300] group-hover:text-white transition-all duration-500 mb-8">
                {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { size: 28 })}
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-2xl text-[#0B1C3D] mb-4 group-hover:text-[#F5B300] transition-colors duration-300">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                {item.desc}
              </p>

              {/* DYNAMIC TAGS */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-widest bg-gray-50 text-gray-400 px-3 py-1.5 rounded-lg border border-gray-100 group-hover:border-[#F5B300]/20 group-hover:text-[#F5B300] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* HIDDEN DECORATOR */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-[#F5B300] rounded-full animate-ping" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 py-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <span className="font-serif italic text-2xl text-[#0B1C3D]">Ready to start your portfolio?</span>
          </div>
          <a 
  href="tel:+919899152327" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block"
>
  <button suppressHydrationWarning className="bg-[#0B1C3D] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#F5B300] hover:text-[#0B1C3D] transition-all duration-500 transform hover:scale-105 active:scale-95">
    Book a Virtual Consultation
  </button>
</a>
        </motion.div>

      </div>
    </section>
  );
}