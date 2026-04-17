"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';
import { Rocket, ShieldCheck, Train, Plane, Map, Building2 } from 'lucide-react';

const timeline = [
  {
    year: "2014",
    content: "Dwarka Expressway announced — land prices at ₹3,500/sq.ft.",
    icon: <Map size={18} />,
    side: "left"
  },
  {
    year: "2017",
    content: "RERA implementation — builder accountability enforced",
    icon: <ShieldCheck size={18} />,
    side: "right"
  },
  {
    year: "2019",
    content: "Rapid Metro Phase 1 operational — connectivity boost",
    icon: <Train size={18} />,
    side: "left"
  },
  {
    year: "2021",
    content: "Delhi-Mumbai Expressway construction accelerated",
    icon: <Rocket size={18} />,
    side: "right"
  },
  {
    year: "2023",
    content: "IGI Airport Terminal 4 approved — ₹9,800 Cr investment",
    icon: <Plane size={18} />,
    side: "left"
  },
  {
    year: "2024",
    content: "Dwarka Expressway fully operational — 536% ROI realized",
    icon: <Building2 size={18} />,
    side: "right"
  },
  {
    year: "2025",
    content: "Rapid Metro Phase 2 + commercial corridors opening",
    highlight: true,
    side: "left"
  },
  {
    year: "2026",
    content: "Delhi-Mumbai Industrial Corridor Phase 1 completion",
    future: true,
    side: "right"
  },
  {
    year: "2028",
    content: "Smart City infrastructure fully operational",
    future: true,
    side: "left"
  },
];

export default function Timeline() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = (side: string): Variants => ({
    hidden: { 
      opacity: 0, 
      x: side === "left" ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  });

  return (
    <section ref={ref} className="bg-[#FAF9F6] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            className="text-[11px] tracking-[0.5em] text-[#F5B300] mb-4 font-black uppercase"
          >
            Infrastructure Development
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="font-serif text-4xl md:text-6xl text-[#0B1C3D] leading-tight max-w-4xl"
          >
            The Growth Story — <span className="italic text-gray-400">A Decade of Transformation</span>
          </motion.h2>
        </div>

        {/* IMAGE VISUALS SECTION - FIXED RATIO & CAPTIONS */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-24">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[380px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2 md:p-3"
          >
            <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2 }}
                src="/infrastructure.jpg" 
                className="w-full h-full object-cover" 
                alt="Highway Infrastructure" 
                />
                <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white font-serif italic text-2xl md:text-3xl tracking-wide">
                    The Expressway Corridor
                </p>
                </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative h-[380px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2 md:p-3"
          >
            <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2 }}
                src="/metro-station.jpg" 
                className="w-full h-full object-cover" 
                alt="Rapid Metro Station" 
                />
                <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white font-serif italic text-2xl md:text-3xl tracking-wide">
                    Future Transit Hubs
                </p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* TOP STATS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {[
            { val: "₹4L Cr", label: "Infra Investment" },
            { val: "10", label: "Expressways Converging" },
            { val: "10", label: "Metro Lines Planned" },
            { val: "₹10L Cr", label: "Govt. Spend Committed" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <p className="text-[#F5B300] text-2xl font-serif font-bold">{stat.val}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE AREA */}
        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            animate={isVisible ? { height: '100%' } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5B300] via-[#0B1C3D]/10 to-transparent md:-translate-x-1/2"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-16"
          >
            {timeline.map((item, i) => (
              <div key={i} className="relative flex md:justify-between items-center w-full">
                
                <div className={`hidden md:block w-[45%] ${item.side === 'left' ? 'text-right' : 'opacity-0 invisible'}`}>
                  {item.side === 'left' && (
                    <motion.div variants={itemVariants("left")} className={`inline-block p-6 rounded-2xl bg-white border ${item.highlight ? 'border-[#F5B300] shadow-lg shadow-[#F5B300]/10' : 'border-gray-100'} shadow-sm`}>
                      <span className="text-[#F5B300] font-serif font-bold text-xl block mb-2">{item.year}</span>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                    </motion.div>
                  )}
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                      item.future ? 'bg-white border-gray-100 text-gray-300' : 
                      item.highlight ? 'bg-[#F5B300] border-[#F5B300] text-[#0B1C3D]' : 
                      'bg-[#0B1C3D] border-[#0B1C3D] text-[#F5B300]'
                    } shadow-md`}
                  >
                    {item.icon || <div className="w-2 h-2 rounded-full bg-current" />}
                  </motion.div>
                </div>

                <div className={`pl-16 md:pl-0 md:w-[45%] ${item.side === 'right' ? 'text-left' : 'md:opacity-0 md:invisible'}`}>
                  <motion.div 
                    variants={itemVariants("right")} 
                    className={`inline-block p-6 rounded-2xl bg-white border ${
                      item.highlight ? 'border-[#F5B300] shadow-lg shadow-[#F5B300]/10' : 
                      item.future ? 'border-dashed border-gray-200 opacity-60' : 'border-gray-100'
                    } shadow-sm`}
                  >
                    <span className="text-[#F5B300] font-serif font-bold text-xl block mb-2">{item.year}</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                    {item.future && <span className="text-[9px] uppercase tracking-tighter text-[#F5B300] font-bold mt-2 block">Planned Catalyst</span>}
                  </motion.div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}