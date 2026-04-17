"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, Landmark, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const kpis = [
  {
    value: "536%",
    title: "Dwarka Expressway ROI",
    desc: "Verified returns for early investors since 2014.",
    icon: <TrendingUp size={20} />,
  },
  {
    value: "158%",
    title: "5-Year Capital Growth",
    desc: "Average appreciation across luxury NCR corridors.",
    icon: <BarChart3 size={20} />,
  },
  {
    value: "98%",
    title: "Occupancy Rate",
    desc: "Consistent demand across premium residential portfolios.",
    icon: <PieChart size={20} />,
  },
  {
    value: "7.2X",
    title: "Rental vs FD Returns",
    desc: "Combined yield exceeding traditional fixed deposits.",
    icon: <Landmark size={20} />,
  },
];

const secondaryStats = [
  { value: "₹3,500", label: "Avg. Price/sq.ft. in 2014" },
  { value: "₹22,500", label: "Avg. Price/sq.ft. in 2024" },
  { value: "3–5%", label: "Annual Rental Yield" },
  { value: "15–25%", label: "Annual Appreciation" },
  { value: "₹1L Cr", label: "Infrastructure Spend" },
  { value: "18%", label: "YoY Demand Growth" },
];

export default function Returns() {
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
      className="py-24 md:py-32 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.5em] text-[#F5B300] mb-5 font-black uppercase">
              Performance Metrics
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-[1.1] mb-6 tracking-tight">
              Returns That <span className="italic text-gray-400 font-light">Endure</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              Every figure is cross-verified by independent market analysts and 
              authenticated transaction records from our global NRI portfolio.
            </p>
          </div>
        </motion.div>

        {/* PRIMARY KPI CARDS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {kpis.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] border border-gray-50 relative group transition-all duration-500"
            >
              <div className="text-[#F5B300] mb-6 bg-[#F5B300]/5 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#F5B300] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <p className="text-[#0B1C3D] text-4xl font-serif font-bold mb-2">
                {item.value}
              </p>
              <h4 className="font-bold text-[#0B1C3D] text-sm uppercase tracking-wider mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {item.desc}
              </p>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-[#F5B300]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* IMAGE PANELS */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700 z-10" />
            <img
              src="/infrastructure.jpg"
              alt="Public Infrastructure"
              className="w-full h-[350px] object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700 z-10" />
            <img
              src="/interior-luxury.jpg"
              alt="Luxury Interior"
              className="w-full h-[350px] object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>

      {/* 🔄 CIRCULAR CARD CAROUSEL */}
      <div className="relative py-16 bg-[#0B1C3D] overflow-hidden">
        {/* Luxury Dissolve Edge Effects */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0B1C3D] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0B1C3D] to-transparent z-20 pointer-events-none" />

        <div className="flex">
          <motion.div 
            className="flex gap-6 pr-6 items-center"
            animate={{ x: [0, -1800] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear",
            }}
            /* Removed pauseOnHover from transition and replaced with CSS/Framer state logic if needed */
          >
            {/* Duplicating cards for seamless circular loop */}
            {[...secondaryStats, ...secondaryStats, ...secondaryStats, ...secondaryStats].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[280px] h-[140px] px-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#F5B300]/50 transition-all duration-500 group"
              >
                <p className="text-[#F5B300] font-serif font-bold text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {item.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-black text-center px-4 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}