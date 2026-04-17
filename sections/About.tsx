"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Eye, Heart, Trophy, Users, Globe, BarChart3, LucideProps } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const partners = [
  "Godrej Properties", "DLF", "Adani Realty", "M3M", "Smartworld",
  "Krisumi", "Sobha", "Prestige", "Tata Housing", "Lodha", "Ambience"
];

const stats = [
  { label: "Years Experience", value: "9+", icon: <Trophy size={18} /> },
  { label: "Team Members", value: "29", icon: <Users size={18} /> },
  { label: "Countries Served", value: "11", icon: <Globe size={18} /> },
  { label: "Assets Under Advisory", value: "$166M+", icon: <BarChart3 size={18} /> },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
    <section ref={ref} className="bg-[#FAF9F6] py-24 overflow-hidden">
      
      {/* 🔘 INFINITE PARTNER LOOP */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <p className="text-[10px] tracking-[0.4em] text-gray-400 mb-10 text-center uppercase font-black">
          Global Partners & RERA-Certified Developers
        </p>
        
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex whitespace-nowrap gap-8 py-4"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((item, i) => (
              <div
                key={i}
                className="px-8 py-4 bg-white border border-gray-100 rounded-2xl text-sm font-semibold text-[#0B1C3D]/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex items-center gap-4 group hover:border-[#F5B300]/30 transition-colors"
              >
                <div className="w-2 h-2 bg-[#F5B300] rounded-full group-hover:scale-150 transition-transform" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🧠 SECTION HEADER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-5xl mx-auto text-center px-6 mb-24"
      >
        <motion.span variants={itemVariants} className="text-[12px] text-[#F5B300] tracking-[0.5em] mb-6 block font-black uppercase">
          The Legacy of RealtyFM
        </motion.span>
        <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-[1.1] mb-8">
          Building Wealth, <span className="italic text-gray-300">Building Trust</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
          Founded by NRIs to solve the transparency gap in Indian real estate. We combine local intelligence with global service standards.
        </motion.p>
      </motion.div>

      {/* 🧱 CORE PILLARS */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 mb-32"
      >
        {[
          { 
            title: "Our Mission", 
            icon: <Target />, 
            desc: "Democratizing premium Indian real estate for the global NRI community through pure, data-driven advisory." 
          },
          { 
            title: "Our Vision", 
            icon: <Eye />, 
            desc: "Setting the gold standard for cross-border investments, targeting $1B+ in assets under advisory by 2030." 
          },
          { 
            title: "Our Values", 
            icon: <Heart />, 
            desc: "Integrity over inventory. We don't just sell property; we curate portfolios for your family's future." 
          }
        ].map((card, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -15 }}
            className="bg-white rounded-[2rem] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-gray-50 text-center flex flex-col items-center group transition-all duration-500 hover:shadow-[#F5B300]/5"
          >
            <div className="w-20 h-20 mb-8 rounded-[1.5rem] bg-[#F5B300]/5 flex items-center justify-center text-[#F5B300] group-hover:bg-[#F5B300] group-hover:text-[#0B1C3D] group-hover:rotate-[10deg] transition-all duration-500">
                {React.cloneElement(card.icon as React.ReactElement<LucideProps>, { size: 32 })}
            </div>
            <h3 className="font-serif text-3xl text-[#0B1C3D] mb-6">{card.title}</h3>
            <p className="text-gray-500 text-base leading-relaxed font-light">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 📊 PREMIUM STATS BAND - Fixed "Out of Box" issue */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative bg-[#0B1C3D] rounded-[3rem] overflow-hidden p-10 md:p-20"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F5B300]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-16">
            <div className="text-center xl:text-left max-w-md">
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                The RealtyFM <span className="text-[#F5B300]">Advantage</span>
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Our growth is a testament to the trust of thousands of NRI families worldwide.
              </p>
            </div>

            {/* Grid with improved spacing to prevent overflow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full xl:w-auto">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 group hover:border-[#F5B300]/40 transition-all duration-500 min-w-[200px]">
                  <div className="text-[#F5B300] mb-4 p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="text-white text-4xl font-serif font-bold mb-2 tracking-tight"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-[10px] text-gray-400 tracking-[0.25em] uppercase font-black text-center px-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}