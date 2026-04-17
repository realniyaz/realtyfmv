"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Landmark, FileCheck, Gavel, PieChart, ShieldAlert, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const policies = [
  {
    title: "PM Gati Shakti",
    desc: "National master plan for multi-modal connectivity worth ₹100L Cr.",
    icon: <PieChart size={20} />,
  },
  {
    title: "RERA 2.0",
    desc: "Enhanced transparency and mandatory delivery timelines for developers.",
    icon: <Gavel size={20} />,
  },
  {
    title: "FEMA Relaxation",
    desc: "Simplified repatriation of funds for NRIs and global institutional investors.",
    icon: <FileCheck size={20} />,
  },
  {
    title: "LTCG Benefits",
    desc: "Optimized tax structures for long-term real estate asset holders.",
    icon: <ShieldAlert size={20} />,
  }
];

export default function Government() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="relative py-24 md:py-32 overflow-hidden bg-[#0B1C3D]"
    >
      {/* 🌌 ARCHITECTURAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5B300]/5 skew-x-12 translate-x-32 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F5B300]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-[#F5B300] rounded-full animate-pulse" />
                <span className="text-[11px] tracking-[0.5em] text-[#F5B300] font-black uppercase">
                  Policy-Driven Growth
                </span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8">
                Backed by the <span className="italic text-gray-400">Highest Levels</span> of Authority
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
                India's real estate corridor is fortified by central and state initiatives 
                surpassing <span className="text-white font-medium">₹12 lakh crore</span> in committed infrastructure spending.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                 <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <Landmark className="text-[#F5B300]" size={32} />
                    <div>
                        <p className="text-white font-bold text-2xl tracking-tight">₹100L Cr</p>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest">Gati Shakti Budget</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <ShieldAlert className="text-[#F5B300]" size={32} />
                    <div>
                        <p className="text-white font-bold text-2xl tracking-tight">100%</p>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest">RERA Compliance</p>
                    </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: POLICY CARDS */}
          <div className="lg:col-span-5">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
            >
              {policies.map((policy, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: "rgba(245, 179, 0, 0.1)" }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] transition-all duration-300 group"
                >
                  <div className="text-[#F5B300] mb-6 transition-transform group-hover:scale-110">
                    {policy.icon}
                  </div>
                  <h3 className="text-white font-serif text-xl mb-3">{policy.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    {policy.desc}
                  </p>
                </motion.div>
              ))}
              
              {/* SPECIAL CTA CARD */}
              <motion.div
                variants={itemVariants}
                className="sm:col-span-2 bg-[#F5B300] p-8 rounded-[2rem] flex justify-between items-center group cursor-pointer"
              >
                <div>
                    <h4 className="text-[#0B1C3D] font-bold text-lg">Policy Deep Dive</h4>
                    <p className="text-[#0B1C3D]/70 text-xs">Contact Us Now</p>
                </div>
                <div className="w-12 h-12 bg-[#0B1C3D] rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={20} />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}