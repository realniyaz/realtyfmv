"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ShieldCheck, Train, Plane, Map, Building2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const timelineData = [
  { year: "2014", content: "Dwarka Expressway announced — land prices at ₹3,500/sq.ft.", icon: <Map size={20} /> },
  { year: "2017", content: "RERA implementation — builder accountability enforced", icon: <ShieldCheck size={20} /> },
  { year: "2019", content: "Rapid Metro Phase 1 operational — connectivity boost", icon: <Train size={20} /> },
  { year: "2021", content: "Delhi-Mumbai Expressway construction accelerated", icon: <Rocket size={20} /> },
  { year: "2023", content: "IGI Airport Terminal 4 approved — ₹9,800 Cr investment", icon: <Plane size={20} /> },
  { year: "2024", content: "Dwarka Expressway fully operational — 536% ROI realized", icon: <Building2 size={20} /> },
  { year: "2026", content: "DMIC Industrial Corridor Phase 1 completion", icon: <Rocket size={20} />, future: true },
  { year: "2028", content: "Smart City infrastructure fully operational", icon: <Map size={20} />, future: true },
];

export default function Timeline() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={ref} 
      className="bg-[#FAF9F6] py-16 md:py-20 overflow-hidden border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              className="text-[10px] tracking-[0.4em] text-[#F5B300] mb-3 font-black uppercase italic"
            >
              Growth Trajectory
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              className="font-serif text-3xl md:text-5xl text-[#0B1C3D] leading-tight"
            >
              The Evolution of <span className="italic text-gray-400 font-light">Appreciation</span>
            </motion.h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
            Scroll to explore <ArrowRight size={14} className="text-[#F5B300]" />
          </div>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="relative group">
          {/* Subtle Progress Line Background */}
          <div className="absolute top-[40px] left-0 right-0 h-[1px] bg-gray-200 z-0" />
          
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center group/card"
              >
                {/* Year Bubble */}
                <div className="relative z-10 flex flex-col items-center md:items-start">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-500 shadow-xl ${
                    item.future 
                    ? 'bg-white border-gray-50 text-gray-300' 
                    : 'bg-[#0B1C3D] border-white text-[#F5B300] group-hover/card:bg-[#F5B300] group-hover/card:text-[#0B1C3D]'
                  }`}>
                    {item.icon}
                  </div>
                  
                  {/* Content Card */}
                  <div className="mt-8 bg-white p-6 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-gray-50 hover:border-[#F5B300]/20 transition-all duration-300 h-[180px] flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-bold text-[#0B1C3D]">{item.year}</span>
                      {item.future && (
                        <span className="text-[8px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">
                          Forecast
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3 italic">
                      {item.content}
                    </p>
                    
                    {/* Floating Connector Dot (Design only) */}
                    <div className="mt-auto flex justify-end">
                      <div className="w-6 h-1 bg-[#F5B300] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges for scroll feel */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none" />
        </div>

        {/* BOTTOM STATS STRIP - Minimized for space */}
        {/* PREMIUM STATS STRIP */}
<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {[
    { val: "₹4L Cr", label: "Infra Investment" },
    { val: "10+", label: "Expressways" },
    { val: "10", label: "Metro Lines" },
    { val: "₹10L Cr", label: "Govt. Commitment" },
  ].map((stat, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden group"
    >
      {/* Background: Deep Navy with Glass effect */}
      <div className="bg-[#0B1C3D] px-6 py-8 rounded-[2rem] border border-white/10 shadow-xl flex flex-col items-center transition-all duration-300 group-hover:border-[#F5B300]/50">
        
        {/* Subtle Glow Effect on Hover */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#F5B300]/10 rounded-full blur-2xl group-hover:bg-[#F5B300]/20 transition-all" />
        
        {/* Value with Gold Italic Styling */}
        <span className="text-3xl md:text-4xl font-serif font-bold italic text-[#F5B300] mb-2 transition-transform duration-300 group-hover:scale-110">
          {stat.val}
        </span>
        
        {/* Label with improved spacing */}
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gray-400 font-medium text-center">
          {stat.label}
        </span>

        {/* Bottom Decorative Line */}
        <div className="mt-4 w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#F5B300] transition-all duration-500" />
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}