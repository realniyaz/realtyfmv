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
    title: "FEMA Compliance",
    desc: "Transactions structured under FEMA guidelines with full repatriation rights.",
    icon: <Globe size={20} />,
  },
  {
    title: "RERA Protection",
    desc: "Total transparency and legal protection through RERA-registered assets.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "NRE/NRO Support",
    desc: "Seamless banking support for investment and rental income handling.",
    icon: <Landmark size={20} />,
  },
  {
    title: "POA Documentation",
    desc: "End-to-end support without needing your physical presence in India.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Tax Optimization",
    desc: "Avoid double taxation with structured tax planning across jurisdictions.",
    icon: <Calculator size={20} />,
  },
  {
    title: "Repatriation",
    desc: "Smooth fund transfer back to your resident country after liquidation.",
    icon: <RefreshCcw size={20} />,
  },
  {
    title: "Joint Ownership",
    desc: "Invest with family to optimize ownership and tax structures.",
    icon: <Users size={20} />,
  },
  {
    title: "TDS Management",
    desc: "Lower tax deductions at source through proper regulatory planning.",
    icon: <FileText size={20} />,
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      // pt-32/pt-48 provides the buffer so Properties cards don't overlap the text
      className="pt-32 pb-12 md:pt-48 md:pb-20 overflow-visible relative border-y border-gray-100" 
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION - Tightened for Premium Look */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] tracking-[0.4em] text-[#F5B300] mb-3 font-black uppercase italic"
          >
            NRI Investor Benefits
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl text-[#0B1C3D] leading-[0.95] mb-6 tracking-tight font-bold"
          >
            Investment Excellence <br />
            <span className="italic text-gray-400 font-light">Simplified.</span>
          </motion.h2>
        </div>

        {/* COMPACT BENTO GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {benefitItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group transition-all duration-500 hover:shadow-[#F5B300]/10 hover:border-[#F5B300]/20"
            >
              {/* ICON BLOCK */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#0B1C3D]/5 flex items-center justify-center text-[#0B1C3D] group-hover:bg-[#F5B300] group-hover:text-white transition-all duration-500 mb-6">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-base md:text-lg text-[#0B1C3D] mb-3 group-hover:text-[#F5B300] transition-colors font-bold leading-tight">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed font-light">
                {item.desc}
              </p>

              {/* STATUS INDICATOR */}
              <div className="mt-auto pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-[1px] bg-[#F5B300]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#F5B300]">Verified</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* REFINED BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#0B1C3D] text-[#F5B300] px-6 py-3 rounded-full shadow-xl">
            <div className="w-1.5 h-1.5 bg-[#F5B300] rounded-full animate-pulse" />
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Dedicated NRI Concierge 24/7</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}