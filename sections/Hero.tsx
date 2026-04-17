"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const metrics = [
  { value: '$250mn', label: 'Assets Under Advisory' },
  { value: '2,500+', label: 'NRI Families Served' },
  { value: '536%', label: 'Top Corridor ROI' },
  { value: '18', label: 'Countries' },
];

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section 
      ref={ref}
      className="relative bg-[#0B1C3D] text-white overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,179,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1C3D]/60 to-[#0B1C3D]" />
      </div>

      {/* FIXED PADDING: Changed pt-32 to pt-44 (mobile) and pt-48 (desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-44 md:pt-48 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col justify-center space-y-8"
        >
          {/* Badge Tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-[#F5B300]/30 text-[#F5B300] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase w-fit shadow-lg shadow-[#F5B300]/5"
          >
            <span className="w-2 h-2 bg-[#F5B300] rounded-full animate-pulse" />
            NRI Real Estate Investment Platform
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            Add High-Growth <br />
            <span className="text-[#F5B300] italic">Indian Real Estate</span> <br />
            to Your Portfolio
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
          >
            Invest in India's most coveted real estate corridors — backed by
            government infrastructure, trusted by 2,500+ NRI families across 18 countries.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
            {/* Primary CTA: Start Investing -> Links to Contact Form */}
<a href="#contact" className="inline-block">
  <button 
    suppressHydrationWarning
    className="group bg-[#F5B300] text-[#0B1C3D] px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-xl shadow-[#F5B300]/20 active:scale-95"
  >
    Start Investing 
    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
  </button>
</a>

{/* Secondary CTA: View Properties -> Links to Properties Section */}
<a href="#properties" className="inline-block">
  <button 
    suppressHydrationWarning
    className="group border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95"
  >
    <span className="bg-[#F5B300] p-1 rounded-full text-[#0B1C3D]">
      <Play size={14} fill="currentColor" />
    </span>
    View Properties
  </button>
</a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT (Floating Cards) */}
        <div className="relative h-[500px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={isVisible ? { 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, -20, 0] 
            } : { opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-0 right-20 z-20 bg-white/5 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 w-72 shadow-2xl"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src="/property-1.jpg" 
                alt="Dwarka Expressway" 
                className="h-40 w-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <p className="text-sm font-semibold tracking-wide">Dwarka Expressway</p>
            <p className="text-[#F5B300] text-xs font-bold mt-1">536% ROI</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={isVisible ? { 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, 20, 0] 
            } : { opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute top-48 -right-8 z-10 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 w-64 shadow-2xl"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src="/property-2.jpg" 
                alt="Golf Course Road" 
                className="h-32 w-full object-cover opacity-80 hover:opacity-100 transition-all" 
              />
            </div>
            <p className="text-sm font-semibold">Golf Course Road</p>
            <p className="text-xs text-gray-400 mt-1">₹22.5 Cr onwards</p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0, opacity: 0, rotate: -15 }}
            animate={isVisible ? { scale: 1, opacity: 1, rotate: -5 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.8 }}
            className="absolute bottom-10 left-10 z-30 bg-[#F5B300] p-[1px] rounded-2xl shadow-2xl shadow-[#F5B300]/20"
          >
            <div className="bg-[#0B1C3D] px-8 py-5 rounded-2xl">
              <p className="text-4xl text-[#F5B300] font-serif font-bold italic">158%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                5-Year Appreciation
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* METRICS SECTION */}
      <div className="border-t border-white/5 bg-black/20 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {metrics.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start space-y-2 group">
                <span className="text-3xl md:text-4xl font-serif font-bold text-white group-hover:text-[#F5B300] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-center md:text-left">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}