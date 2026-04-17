"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Building, CheckCircle2, Timer } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const projects = [
  {
    title: "Smartworld One DXP Tower",
    developer: "Smartworld",
    status: "Under Construction",
    progress: 65,
    date: "Dec 2026",
    units: "450 Units",
    image: "/property-1.jpg",
  },
  {
    title: "Krisumi Waterfall Township",
    developer: "Krisumi Corp",
    status: "Completed",
    progress: 100,
    date: "Delivered 2024",
    units: "320 Units",
    image: "/property-2.jpg",
  },
  {
    title: "M3M Crown Ultra Luxury",
    developer: "M3M India",
    status: "Pre-Launch",
    progress: 15,
    date: "Mar 2027",
    units: "180 Units",
    image: "/property-3.jpg",
  },
  {
    title: "DLF Privana South Estate",
    developer: "DLF Ltd.",
    status: "Under Construction",
    progress: 40,
    date: "Jun 2027",
    units: "32 Penthouses",
    image: "/property-4.jpg",
  },
  {
    title: "Godrej Zenith Commercial",
    developer: "Godrej Properties",
    status: "Under Construction",
    progress: 72,
    date: "Sep 2026",
    units: "200 Offices",
    image: "/property-5.jpg",
  },
  {
    title: "Adani Samsara Vilasa",
    developer: "Adani Realty",
    status: "Completed",
    progress: 100,
    date: "Delivered 2023",
    units: "120 Villas",
    image: "/property-6.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

function getStatusStyles(status: string) {
  if (status === "Completed") return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
  if (status === "Pre-Launch") return "bg-amber-500/10 text-amber-600 border-amber-500/20";
  return "bg-[#0B1C3D]/5 text-[#0B1C3D] border-[#0B1C3D]/10";
}

export default function Developments() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref} 
      className="py-24 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.5em] text-[#F5B300] mb-4 font-black uppercase">
              Project Tracking
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-tight mb-6">
              Ongoing & <span className="italic text-gray-400">Completed</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-8">
              Real-time construction milestones. We provide monthly visual audits 
              to ensure your investment stays on schedule.
            </p>
            
            {/* Centered Transparency Badge */}
            <div className="inline-flex flex-col items-center border-t border-gray-200 pt-6">
              <p className="text-[#0B1C3D] font-serif italic text-2xl tracking-tight">100% Transparency</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">Audit-Ready Projects</p>
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] border border-gray-50 group transition-all duration-500"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
                
                {/* STATUS BADGE */}
                <div className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${getStatusStyles(item.status)}`}>
                  {item.status}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl text-[#0B1C3D] mb-2 group-hover:text-[#F5B300] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 flex items-center gap-2 font-bold">
                    <Building size={14} className="text-[#F5B300]" /> {item.developer}
                  </p>
                </div>

                {/* PROGRESS TRACKER */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end text-[10px] uppercase font-black tracking-widest">
                    <span className="text-gray-400">Current Progress</span>
                    <span className="text-[#0B1C3D] text-sm">{item.progress}%</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${item.progress}%` } : {}}
                      transition={{ duration: 1.8, ease: "circOut", delay: 0.4 + i * 0.1 }}
                      className="h-full rounded-full bg-[#F5B300] shadow-[0_0_15px_rgba(245,179,0,0.4)]"
                    />
                  </div>
                </div>

                {/* FOOTER METRICS */}
                <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-50">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Timeline</span>
                    <div className="flex items-center gap-2 text-[#0B1C3D]">
                      <Timer size={14} className="text-[#F5B300]" />
                      <span className="text-xs font-bold">{item.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Capacity</span>
                    <div className="flex items-center gap-2 text-[#0B1C3D]">
                      <span className="text-xs font-bold">{item.units}</span>
                      <CheckCircle2 size={14} className="text-[#F5B300]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CENTERED CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <a href="tel:+919899152327" className="inline-block">
  <button 
    suppressHydrationWarning
    className="relative group overflow-hidden px-12 py-5 bg-[#0B1C3D] text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl hover:shadow-[#F5B300]/20 active:scale-95"
  >
    {/* Added group-hover:text-black so text is readable on gold bg */}
    <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0B1C3D]">
      Request Site Inspection Video
    </span>
    
    <div className="absolute inset-0 bg-[#F5B300] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
  </button>
</a>
        </motion.div>
      </div>
    </section>
  );
}