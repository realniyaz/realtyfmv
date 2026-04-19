"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Landmark, FileCheck, Gavel, PieChart, ShieldAlert, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const policies = [
  { title: "PM Gati Shakti", desc: "₹100L Cr master plan.", icon: <PieChart size={18} /> },
  { title: "RERA 2.0", desc: "Mandatory timelines.", icon: <Gavel size={18} /> },
  { title: "FEMA Rules", desc: "Easy repatriation.", icon: <FileCheck size={18} /> },
  { title: "LTCG Alpha", desc: "Tax optimization.", icon: <ShieldAlert size={18} /> }
];

export default function Government() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="relative py-16 md:py-32 overflow-hidden bg-[#0B1C3D]"
    >
      {/* 🌌 Background Elements - Hidden on mobile for cleaner look */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5B300]/5 skew-x-12 translate-x-32 hidden md:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F5B300]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="w-1.5 h-1.5 bg-[#F5B300] rounded-full animate-pulse" />
                <span className="text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] text-[#F5B300] font-black uppercase">
                  Policy-Driven Growth
                </span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-7xl text-white leading-[1.2] md:leading-[1.1] mb-6 md:mb-8">
                Backed by the <span className="italic text-gray-400 font-light">Highest Levels</span> of Authority
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-xl font-light leading-relaxed max-w-xl mb-8 md:mb-12 italic">
                Fortified by central initiatives surpassing <span className="text-white font-medium">₹12 lakh crore</span> in committed infrastructure spending.
              </motion.p>

              {/* STATS STRIP: Changed to flex-row on mobile */}
              <motion.div variants={itemVariants} className="flex flex-row gap-3 md:gap-6">
                 <div className="flex-1 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <Landmark className="text-[#F5B300] w-6 h-6 md:w-8 md:h-8" />
                    <div>
                        <p className="text-white font-bold text-lg md:text-2xl leading-none mb-1">₹100L Cr</p>
                        <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-tighter md:tracking-widest">Budget</p>
                    </div>
                 </div>
                 <div className="flex-1 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <ShieldAlert className="text-[#F5B300] w-6 h-6 md:w-8 md:h-8" />
                    <div>
                        <p className="text-white font-bold text-lg md:text-2xl leading-none mb-1">100%</p>
                        <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-tighter md:tracking-widest">RERA Safe</p>
                    </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: POLICY CARDS - Changed to 2-column on mobile */}
          <div className="lg:col-span-5">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {policies.map((policy, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-[2rem] transition-all duration-300 group"
                >
                  <div className="text-[#F5B300] mb-4 md:mb-6">
                    {policy.icon}
                  </div>
                  <h3 className="text-white font-serif text-sm md:text-xl mb-1 md:mb-3 font-bold italic">{policy.title}</h3>
                  <p className="text-gray-500 text-[10px] md:text-xs leading-tight md:leading-relaxed font-light">
                    {policy.desc}
                  </p>
                </motion.div>
              ))}
              
              {/* SPECIAL CTA CARD - Full width on mobile */}
              <motion.div
                variants={itemVariants}
                onClick={() => window.location.href = '#contact'}
                className="col-span-2 bg-[#F5B300] p-5 md:p-8 rounded-2xl md:rounded-[2rem] flex justify-between items-center group cursor-pointer"
              >
                <div>
                    <h4 className="text-[#0B1C3D] font-bold text-base md:text-lg italic uppercase">Policy Deep Dive</h4>
                    <p className="text-[#0B1C3D]/70 text-[10px] font-bold tracking-widest uppercase">Consult Now</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0B1C3D] rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={18} />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}