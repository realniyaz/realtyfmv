"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe, 
  Landmark, 
  FileText, 
  Calculator, 
  RefreshCcw, 
  Users, 
  Briefcase 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const benefitItems = [
  {
    title: "FEMA Compliant Transactions",
    desc: "All transactions structured under FEMA guidelines with full repatriation rights.",
    icon: <Globe size={20} />,
  },
  {
    title: "RERA Protection",
    desc: "Every property is RERA-registered ensuring total transparency and legal protection.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "NRE/NRO Account Support",
    desc: "Banking support for smooth investment and seamless rental income handling.",
    icon: <Landmark size={20} />,
  },
  {
    title: "Power of Attorney Services",
    desc: "End-to-end documentation support without needing your physical presence in India.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Tax Benefits Under DTAA",
    desc: "Avoid double taxation with structured tax optimization across global jurisdictions.",
    icon: <Calculator size={20} />,
  },
  {
    title: "Repatriation on Sale",
    desc: "Smooth fund transfer back to your resident country after property liquidation.",
    icon: <RefreshCcw size={20} />,
  },
  {
    title: "Joint Ownership Options",
    desc: "Invest with family members and optimize your ownership and tax structures.",
    icon: <Users size={20} />,
  },
  {
    title: "TDS Management",
    desc: "Reduce tax deductions at source with proper regulatory planning and compliance.",
    icon: <FileText size={20} />,
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
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
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="text-[11px] tracking-[0.5em] text-[#F5B300] mb-5 font-black uppercase"
          >
            NRI Investor Benefits
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-[1.1] mb-8 tracking-tight"
          >
            Investment Excellence <br />
            <span className="italic text-gray-400 font-light">Simplified.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Navigating Indian real estate as an NRI is a journey of precision. 
            We handle the complexity—from FEMA compliance to tax optimization.
          </motion.p>
        </div>

        {/* BENTO-STYLE BENEFITS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefitItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col group transition-all duration-500 hover:shadow-[#F5B300]/10"
            >
              {/* ICON BLOCK */}
              <div className="w-12 h-12 rounded-2xl bg-[#0B1C3D]/5 flex items-center justify-center text-[#0B1C3D] group-hover:bg-[#F5B300] group-hover:text-white transition-all duration-500 mb-8">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-lg text-[#0B1C3D] mb-4 group-hover:text-[#F5B300] transition-colors duration-300">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>

              {/* DECORATIVE STEP INDICATOR */}
              <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-[1px] bg-[#F5B300]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[#F5B300]">Verified</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#0B1C3D] text-white px-8 py-4 rounded-full shadow-2xl">
            <div className="w-2 h-2 bg-[#F5B300] rounded-full animate-ping" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Dedicated NRI Concierge Team Available 24/7</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}